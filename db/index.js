/* Creates new DB and forwards all other */
const fs = require('fs');
const jsonfile = require('jsonfile');

let db = require('./config');

console.log(db);

const createCollection = function(name) {
  let path = `./${db.name}/${name}`;

  console.log(`Collection ${name} of Database ${db.name} already exists`);

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
  })

  jsonfile.writeFile(`./config.json`, db, function(err, obj){
    if(err)
      console.log(err);
  });
}

const createDatabase = function(name) {
  let path = `./${name}`;

  if(fs.existsSync(path))
    throw `Database ${name} already exists`;

  //Create directory
  fs.mkdirSync(path);

  db.name = name;
  console.log(db);
  jsonfile.writeFile('./config.json', db, function(err){
    if(err)
      console.log(err);
  });

  console.log(`SUCCESS! Database ${name} created`);

}

const insert =  function(collection, object){

  if(!fs.existsSync(path))
    throw `Collection ${name} of Database ${db.name} does not exist`;

  let path = `./${db.name}/${collection}`;

  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  data.push(object);

  jsonfile.writeFile(`${path}/data.json`, data, function(err){
    if(err)
      console.log(err);
  });

}

const connect = function(name){

  if(!fs.existsSync(`./${name}`))
    throw `Database ${name} does not exist`;

  db.name = name;
  jsonfile.writeFile('./config.json', db, function(err){
    if(err)
      console.log(err);
  });
}

// const getAll = function(collection){
//
// }
//
// const getWherePropisValue = function(collection, prop, value){
//
// }
//exports.createCollection = createCollection
// createCollection('loggers')

//createDatabase("Diljit")
createCollection("balu")
