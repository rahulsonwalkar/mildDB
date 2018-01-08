const db = require('./db');
const jsonfile = require('jsonfile');
const dir = require('./db/path_dir.js');

const configTemplate = require('./templates/config.json');

jsonfile.writeFile(`${dir}/config.json`, configTemplate, function(err, obj){
    if(err)
      console.log(err);
});

module.exports = db;
