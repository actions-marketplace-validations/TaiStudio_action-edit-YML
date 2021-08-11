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



try {
    const nameToGreet = core.getInput('who-to-greet');
    const type = core.getInput('type');
    console.log(`Hello ${nameToGreet}!`, typeof nameToGreet);

    switch(type){
        case 'single':
            single();
            break;
        case 'multiple':
            break;
        default:
            single();

    }
} catch (error) {
    core.setFailed(error.message);
}

function single(){
    console.log('bite');
}

function editor(file, strPARAM, find, replace){
    try {
        const doc = yaml.load(fs.readFileSync('./dist/latest.yml', 'utf8'));
        // const doc = yaml.load(fs.readFileSync(file, 'utf8'));
        doc['files'][0]['url'] = replaceALL(doc['files'][0]['url'], '-', '.');
        // doc['files'][0]['url'] = replaceALL(doc['files'][0]['url'], find, replace);
        doc['path'] = replaceALL(doc['path'], '-', '.');
        console.log(doc);
    
        var newFile = yaml.dump(doc);
        fs.writeFileSync('test.yml', newFile, 'utf8');
    } catch (e) {
        console.log(e);
    }
}

function replaceALL(str, find, replace) {
    var escapedFind=find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
}