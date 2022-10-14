const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Dmb',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\Jon\\Documents\\Subway\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Dmb',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\Jon\\Documents\\Subway',
          templates:
            'C:\\Users\\Jon\\Documents\\Subway\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\Jon\\Documents\\Subway\\.docz',
          cache: 'C:\\Users\\Jon\\Documents\\Subway\\.docz\\.cache',
          app: 'C:\\Users\\Jon\\Documents\\Subway\\.docz\\app',
          appPackageJson: 'C:\\Users\\Jon\\Documents\\Subway\\package.json',
          appTsConfig: 'C:\\Users\\Jon\\Documents\\Subway\\tsconfig.json',
          gatsbyConfig: 'C:\\Users\\Jon\\Documents\\Subway\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Users\\Jon\\Documents\\Subway\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\Jon\\Documents\\Subway\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\Jon\\Documents\\Subway\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Jon\\Documents\\Subway\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\Jon\\Documents\\Subway\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Users\\Jon\\Documents\\Subway\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Jon\\Documents\\Subway\\.docz\\app\\index.html',
          db: 'C:\\Users\\Jon\\Documents\\Subway\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
