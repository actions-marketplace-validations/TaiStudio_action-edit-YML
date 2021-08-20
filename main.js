/*--------------------------------------------------------------------------------------\
|  _______    _    _____ _             _ _           ________     ___   ___ ___  __     |
| |__   __|  (_)  / ____| |           | (_)         /  ____  \   |__ \ / _ \__ \/_ |    |
|    | | __ _ _  | (___ | |_ _   _  __| |_  ___    /  / ___|  \     ) | | | | ) || |    |
|    | |/ _` | |  \___ \| __| | | |/ _` | |/ _ \  |  | |       |   / /| | | |/ / | |    |
|    | | (_| | |  ____) | |_| |_| | (_| | | (_) | |  | |___    |  / /_| |_| / /_ | |    |
|    |_|\__,_|_| |_____/ \__|\__,_|\__,_|_|\___/   \  \____|  /  |____|\___/____||_|    |
|                                                   \________/                          |
\--------------------------------------------------------------------------------------*/

const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

try {
    const type = core.getInput('type');
    const files = core.getInput('files');
    const replace = core.getInput('replace');
    const replaceFor = core.getInput('replaceFor');

    switch(type){
        case 'single':
            single(files, replace, replaceFor);
            break;
        case 'multiple':
            console.log("this function it's in working progress !");
            break;
        default:
            single();

    }
} catch (error) {
    core.setFailed(error.message);
}

function single(files, replace, replaceFor){
    editor(files, replace, replaceFor);
}

function editor(file, strPARAM, find, replace){
    try {
        const doc = yaml.load(fs.readFileSync(file, 'utf8'));
        doc['files'][0]['url'] = replaceALL(strPARAM, find, replace);
        var newFile = yaml.dump(doc);
        fs.writeFileSync(file, newFile, 'utf8');
    } catch (e) {
        console.log(e);
    }
}

function replaceALL(str, find, replace) {
    var escapedFind=find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
}