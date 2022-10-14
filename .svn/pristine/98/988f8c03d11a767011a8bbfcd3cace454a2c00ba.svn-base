if (typeof(window.NEOCAST) === "undefined") {
    window.NEOCAST = {};
}

var data = window.NEOCAST.data = {};
var watchers  = [];
var json      = {};
var timeout   = 1000;
var data_path = '/etc/rdm/neocast-data.json';

data.flatten = function() {
    return get_data("flatten", Array.prototype.slice.call(arguments));
}

data.player = function() {
    return get_data("player", Array.prototype.slice.call(arguments));
}

data.location = function()  {
    return get_data("location", Array.prototype.slice.call(arguments));
}

data.network = function() {
    return get_data("network", Array.prototype.slice.call(arguments));
}

data.customer = function() {
    return get_data("customer", Array.prototype.slice.call(arguments));
}

data.smart_group = function() {
    return fetch_group_or_smart_group("smart_group", Array.prototype.slice.call(arguments));
}

data.group = function() {
    return fetch_group_or_smart_group("group", Array.prototype.slice.call(arguments));
}

///////////////////////////////////////////////////////////////////////////////////////////

function get_data(section, args) {
    var last_argument = args[args.length - 1];

    if (typeof(last_argument) === "function") {
        args.pop();
        watchers.push({"section": section, "args": args, "func": last_argument});
        last_argument(get_data(section, args));

        return null;
    }

    if (section === "flatten") {
        var key = args[0];
        for (var i = 1; i < args.length; i++) {
            var section = args[i];
            var value   = get_data(section, [key]);
            if (!(value === null)) { return value; }
        }

        return null;
    }

    var data = json[section];
    if (typeof(data) == "undefined") {
        return null;
    }

    var key = args[0];
    for (var i = 0; i < data.length; i++) {
        if (data[i]["key"] == key) {
            return data[i]["value"];
        }
    }

    return null;
}

function fetch_group_or_smart_group(prefix, args) {
    var group_info = args.shift();

    var method = "";
    if (typeof(group_info) == "number") {
        method = prefix + "_number_" + group_info;
    }
    else {
        method = prefix + "_name_" + group_info;
    }

    return get_data(method, args);
}

function fixup_groups(json, key, new_key_prefix) {
    var groups = json[key];
    if (typeof(groups) == "undefined") { return; }

    for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        json[new_key_prefix + "_number_" + group["id"]] = group["data"];
        json[new_key_prefix + "_name_" + group["name"]] = group["data"];
    }

    delete json[key];
}

function load_data() {
    // If NEOCAST_DATA_GLOBAL is set, we will use that instead of loading
    // from a data file. This allows for local development/testing
    if (typeof(window.NEOCAST_DATA_LOCAL) != "undefined") {
        json = window.NEOCAST_DATA_LOCAL;
        return;
    }

    // If XMLHttpRequest is undefined (e.g. we are running in a javascript
    // console without networking (e.g. v8), simply return.
    if (typeof(XMLHttpRequest) == "undefined") {
        return;
    }

    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', data_path, false);
    request.send(null);

    if (!(request.responseText === "")) {
        var parsed_json = JSON.parse(request.responseText);

        fixup_groups(parsed_json, "groups",       "group");
        fixup_groups(parsed_json, "smart_groups", "smart_group");

        json = parsed_json;
    }
}

function scan_for_changes() {
    var old_values = [];

    for (var i = 0; i < watchers.length; i++) {
        var watcher = watchers[i];
        var value   = get_data(watcher.section, watcher.args);

        old_values.push(value);
    }

    load_data();

    for (var i = 0; i < watchers.length; i++) {
        var watcher = watchers[i];

        var old_value = old_values[i];
        var new_value = get_data(watcher.section, watcher.args);

        if (!(new_value === old_value)) {
            watcher.func(new_value);
        }
    }
}

load_data();

// If setTimeout is undefined (e.g. we are running in a javascript
// console without it (e.g. v8), skip setting the callbacks
if (typeof(setTimeout) != "undefined") {
    setTimeout(scan_for_changes, timeout);
}
