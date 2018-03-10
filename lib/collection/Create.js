const fs = require('fs');

function collection(state){
  let path = getPath(state);

  create(path, state);
}

function create(path, state){

  if(!fs.existsSync(path))
    fs.mkdirSync(path);
  else
    throw `Collection ${state.name} of Database ${state.db.name} already exists`;

  fs.writeFile(`${path}/data.json`, "[]", function(err){
        if(err)
            throw err;
        console.log(`SUCCESS! Collection ${state.name} of Database ${state.db.name} created`);
  });

  //Optional callback
  if(state.callback)
    state.callback();
}

function getPath(state){
  return `${state.dir}/${state.db.name}/${state.name}`;
}

module.exports = collection;
