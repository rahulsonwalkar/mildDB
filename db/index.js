/* Creates new DB and forwards all other */
const fs = require('fs');
const jsonfile = require('jsonfile');
const dir = require('./path_dir').development();

let db = JSON.parse(fs.readFileSync(`${dir}/config.json`));

const createCollection = function(name) {
  //let path = `./db/${db.name}/${name}`;
  let path = `${dir}/${db.name}/${name}`;

  if(fs.existsSync(path))
    throw `Collection ${name} of Database ${db.name} already exists`;

  //Create directory
  fs.mkdirSync(path);

  fs.writeFile(`${path}/data.json`, "[]", function(err) {
      if(err)
          throw err;
      console.log(`SUCCESS! Collection ${name} of Database ${db.name} created`);
  });

  db.collections.push({
    "name" : name
  });

  jsonfile.writeFile(`${dir}/config.json`, db, function(err, obj){
    if(err)
      console.log(err);
  });
}

const createDatabase = function(name) {
  let path = `${dir}/${name}`;

  if(fs.existsSync(path))
    throw `Database ${name} already exists`;

  //Create directory
  fs.mkdirSync(path);

  db.name = name;
  console.log(db);
  jsonfile.writeFile(`${dir}/config.json`, db, function(err){
    if(err)
      console.log(err);
  });

  console.log(`SUCCESS! Database ${name} created`);

}

const insert =  function(collection, object){
  let path = `${dir}/${db.name}/${collection}`;

  if(!fs.existsSync(path))
    throw `Collection ${name} of Database ${db.name} does not exist`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  data.push(object);

  jsonfile.writeFile(`${path}/data.json`, data, function(err){
    if(err)
      console.log(err);
  });

}

const insertAll =  function(collection, objects){
  let path = `${dir}/${db.name}/${collection}`;

  if(!fs.existsSync(path))
    throw `Collection ${name} of Database ${db.name} does not exist`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  objects.map((object) => data.push(object));

  jsonfile.writeFile(`${path}/data.json`, data, function(err){
    if(err)
      console.log(err);
  });

}

const connect = function(name){

  if(!fs.existsSync(`${dir}/${name}`))
    throw `Database ${name} does not exist`;

  db.name = name;
  jsonfile.writeFile(`${dir}/config.json`, db, function(err){
    if(err)
      console.log(err);
  });
}

const getAll = function(collection){
  let path = `${dir}/${db.name}/${collection}`

  if(!fs.existsSync(path))
    throw `Collection ${collection} of Database ${db.name} does not exist!`;

  return JSON.parse(fs.readFileSync(`${path}/data.json`));
}

const getWhere = function(collection, prop, value){
  let path = `${dir}/${db.name}/${collection}`

  if(!fs.existsSync(path))
    throw `Collection ${collection} of Database ${db.name} does not exist!`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`)).filter( (object) => {
    return (object[prop] === value) ? object : null;
  });

  return data[0];
}
//exports.createCollection = createCollection
// createCollection('loggers')

//createDatabase("Diljit")
//cdcreateCollection("balu")

module.exports = {createCollection, createDatabase, connect, insert, getAll, getWhere, insertAll};
