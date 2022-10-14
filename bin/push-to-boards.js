const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const SSH = require('simple-ssh');
const scpClient = require('scp2');
const moment = require('moment');
const archiver = require('archiver');
const inquirer = require('inquirer');

const QUAD_PLAYER_HOST = '10.192.120.87';
const DUAL_PLAYER_HOST = '10.192.120.167';
const OUTPUT_CWD = '/tmp';
const OUTPUT_DIR = 'dmb';
const OUTPUT_PATH = path.join(OUTPUT_CWD, OUTPUT_DIR);
const BUILD_PATH = path.join(__dirname, '../build');
const RDM_URL = 'https://realdigmed.vo.llnwd.net/e1/content/upshot/media/';
const DEFAULT_FILE_NAME = `JM_${moment().format('MMDDYYYY_HHmm')}`

let PLAYER_IP = QUAD_PLAYER_HOST;

// NEOCAST content
const API_KEY = 'd5ec60da8e60133263c0377fbd1da8b6';
const UPLOAD_API = 'https://upshot.neocastnetworks.com/api/uploads/media';

// Check to see if the output directory exists. If not, create it.
if (!fs.existsSync(OUTPUT_PATH)) {
  fs.ensureDirSync(OUTPUT_PATH);
}

// Questions
const questions = [
  {
    type: 'list',
    name: 'crud',
    message: 'Do you want to create new .mht content, or update existing content on the player?',
    choices: ['New', 'Update'],
    default: 'Update'
  },
  // New
  {
    type: 'input',
    name: 'filename',
    message: 'Enter your filename',
    default: DEFAULT_FILE_NAME,
    when: (answers) => answers.crud === 'New',
    filter: (val) => `${val.replace(/\.mht/, '')}.mht`
  },
  // Update
   {
    type: 'list',
    name: 'player',
    message: 'Update quad or dual player?',
    default: 'quad',
    choices: ['quad', 'dual'],
    when: (answers) => answers.crud === 'Update'
  },
  // {
  //   type: 'confirm',
  //   name: 'showDevInfo',
  //   message: 'Show dev panel? This is the red box which says who pushed, and when.',
  //   default: false,
  //   when: (answers) => answers.crud === 'Update'
  // },
  {
    type: 'confirm',
    name: 'forced',
    message: `Do you want to *force* display what\'s in local-data.json as opposed to what is in Director? This is useful if you want to specifically show a rotation or promo. When pushing to Neocast for new content, this should be *false* unless you know what you're doing.`,
    default: (answers) => answers.crud === 'New' ? false : true
  },
  {
    type: 'password',
    name: 'playerPassword',
    message: 'Enter the password for the player?',
    when: (answers) => answers.crud === 'Update'
  },
];

const buildAndShipContent = (answers) => {
  const {
    crud,
    playerPassword,
    filename,
    showDevInfo,
    forced
  } = answers;

  // Rebuild content
  console.log('🚧   Building your content...');
  console.log(`set SHOW_DEV_INFO=${crud === 'Update' && showDevInfo}&&set FORCE_CONTENT=${forced}&&yarn build`);
  exec(`set SHOW_DEV_INFO=${crud === 'Update' && showDevInfo}&&set FORCE_CONTENT=${forced}&&yarn build`,  { maxBuffer: 1024 * 50000 }, (error, stdout, stderr) => {

    const outputFile = path.join(OUTPUT_PATH, filename);
    const output = fs.createWriteStream(outputFile);
    console.log(['path --',OUTPUT_PATH, filename]);
    // Listen for content to finish zipping
    output.on('close', () => {

      if (crud === 'New') {
        const command = `curl -F \"file=@${outputFile}\" -F \"api_key=${API_KEY}\" ${UPLOAD_API}`;

        console.log('🚀   Uploading content to Neocast...');
        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error('Failed to upload', error);
            process.exit();
          }

          console.log('🔗   Here\'s your RDM URL: ', `${RDM_URL}${filename}`);
        })
      }

      if (crud === 'Update') {
        console.log('🕵   SCPing over your content...');
        scpClient.scp(outputFile, {
          host: PLAYER_IP,
          username: 'root',
          password: playerPassword,
          path: '/media/'
        }, (err) =>{
          if (err) {
            console.error('Failed to copy over content', err);
            process.exit();
          }

          const ssh = new SSH({
            host: PLAYER_IP,
            user: 'root',
            pass: playerPassword
          });

          console.log('⚡️   Restarting player renderer...');
          ssh.exec('rdmkickrender', {
            out: (stdout) => {
              // console.log(stdout);
            }
          }).start();
        })
      }
    });

    // Zip up build content
    console.log('🤐   Zipping up your content...');
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });
    archive.pipe(output);
    archive.glob('**/*', {
      cwd: BUILD_PATH,
      expand: true
    }, {})
    archive.finalize();
  });
}

// Prompt the user for questions
inquirer
  .prompt(questions)
  .then((answers) => {
    const {
      player,
      crud,
      playerPassword
    } = answers;

    let { filename } = answers;

    if (player === 'dual') {
      PLAYER_IP = DUAL_PLAYER_HOST
    }

    if (crud === 'Update') {
      const searchRegex = /mediaSource="(.*?)" mediaType="html"/
      const fetchFileLine = 'cd /opt/NEOCAST/media/presentations && ls -Art *.xml | head -n 1 | xargs cat';
      const ssh = new SSH({
        host: PLAYER_IP,
        user: 'root',
        pass: playerPassword
      });


      ssh.exec(fetchFileLine, {
        out: (stdout) => {
          const matches = searchRegex.exec(stdout);

          if (!matches || matches.length < 2 || !matches[1]) {
            console.error(stdout);
            console.error('Error: Failed to determine latest .mht file on the player to update.');
            process.exit();
          }

          // Set the filename to the one that's configured on the player
          console.log(`👍   Found ${matches[1]} on the player.`);
          filename = matches[1];
          buildAndShipContent(Object.assign({}, answers, {
            filename
          }));
        },
        err: function(stderr) {
          console.log("Error during `ssh.exec()`:");
          console.log(stderr)
          console.log("Might need to reboot the box?");
        },
        exit: function() {
          console.log("Exited?");
        }
      }).start();

      console.log(ssh);



    // Otherwise, just build and upload the content to Neocast
    } else {
      buildAndShipContent(answers);
    }
});
