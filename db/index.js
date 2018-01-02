/* Creates new DB and forwards all other */
const fs = require('fs');
const jsonfile = require('jsonfile');

let db = require('./config');

console.log(db);

const createCollection = function(name) {
  path = `./${db.name}/${name}`;

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
      console.log(err)
  });
}

const createDatabase = function(name) {
  path = `./${name}`;

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
//
// const insert =  function(collection, object){
//
//   fs.writeFile(`${path}/data.json`, "[]", function(err) {
//       if(err)
//           throw err;
//       console.log(`SUCCESS! Collection ${name} of Database ${db} created`);
//   });
// }
//exports.createCollection = createCollection
// createCollection('loggers')

//createDatabase("Diljit")
createCollection("balu")
