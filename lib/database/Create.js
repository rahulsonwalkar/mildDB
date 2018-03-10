const fs = require('fs');
const jsonfile = require('jsonfile');

function database(state){
  let path = getPath(state);

  console.log(path);
  create(path, state);
}

function getPath(state){
  return `${state.dir}/${state.name}`;
}

function create(path, state){

  if(!fs.existsSync(path))
    fs.mkdirSync(path);
  else
    throw `Database ${state.name} already exists`;

  state.db.name = state.name;

  jsonfile.writeFile(`${state.dir}/config.json`, state.db, function(err){
    if(err)
      console.log(err);
  });

  console.log(`SUCCESS! Database ${state.name} created`);

  if(state.callback)
    state.callback();

}

module.exports = database;
