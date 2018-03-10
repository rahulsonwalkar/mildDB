const fs = require('fs');
const jsonfile = require('jsonfile');

function getPath(state){
  return `${state.dir}/${state.db.name}/${state.collection}`;
}

function insertOne(state){

  let path = getPath(state);

  if(!fs.existsSync(path))
    throw `Collection ${state.collection} of Database ${state.db.name} does not exist`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  data.push(state.value);

  jsonfile.writeFile(`${path}/data.json`, data, function(err){
    if(err)
      console.log(err);
    console.log(`SUCCESS! Inserted 1 object in ${state.collection}`);
  });

  if(state.callback)
    state.callback();
}

function insertMany(state){

  let path = getPath(state);

  if(!fs.existsSync(path))
    throw `Collection ${state.collection} of Database ${state.db.name} does not exist`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  state.values.map((value) => data.push(value));

  jsonfile.writeFile(`${path}/data.json`, data, function(err){
    if(err)
      console.log(err);

    console.log(`SUCCESS! Inserted ${state.values.length} objects in ${state.collection}`);
  });

  if(state.callback)
    state.callback();
}
module.exports = {
  one: insertCollection,
  many: insertMany
}
