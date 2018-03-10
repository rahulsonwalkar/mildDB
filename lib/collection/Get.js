const fs = require('fs');

function getAll(state){
  let path = getPath(state);

  if(!fs.existsSync(path))
    throw `Collection ${state.collection} of Database ${state.db.name} does not exist!`;

  if(state.callback)
    state.callback();

  return JSON.parse(fs.readFileSync(`${path}/data.json`));
}

function getPath(state){
  return `${state.dir}/${state.db.name}/${state.collection}`;
}

module.exports = {
  all: getAll,
  where: getWhere
}
