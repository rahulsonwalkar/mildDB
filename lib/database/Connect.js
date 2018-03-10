const fs = require('fs');
const jsonfile = require('jsonfile');

function connect(state){
  let path = getPath(state);

  makeConnection(path, state);
}

function getPath(state){
  return `${state.dir}/${state.name}`;
}

function makeConnection(path, state){

  if(!fs.existsSync(path))
    throw `Database ${state.name} does not exist`;

  state.db.name = state.name;

  jsonfile.writeFile(`${state.dir}/config.json`, state.db, function(err){
    if(err)
      console.log(err);
  });

  if(state.callback)
    state.callback();
}

module.exports = connect;
