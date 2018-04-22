const fs = require('fs');

function getAll(state){
  let path = getPath(state);

  if(!fs.existsSync(path))
    throw `Collection ${state.collection} of Database ${state.db.name} does not exist!`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  if(!state.callback)
    return data;

  state.callback(data);
}

function getPath(state){
  return `${state.dir}/${state.db.name}/${state.collection}`;
}

function getWhere(state){
  let path = getPath(state);

  if(!fs.existsSync(path))
    throw `Collection ${state.collection} of Database ${state.db.name} does not exist!`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  for(let key in state.conditions){
    let temporary_data = [];

    for(let index in data){
      let temporary_object = data[index];

      if(!temporary_object[key])
        throw `Property ${key} for an object in ${state.collection} of Database ${state.db.name} does not exist!`;

      if(temporary_object[key] == state.conditions[key])
        temporary_data.push(temporary_object);
    }

    data = temporary_data;
  }

  if(!state.callback)
    return data;

  state.callback(data);
}

module.exports = {
  all: getAll,
  where: getWhere
}
