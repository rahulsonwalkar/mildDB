/* Creates new DB and forwards all other */
const fs = require('fs');
const jsonfile = require('jsonfile');
const dir = require('./path_dir').production();
const rimraf = require('rimraf');

const Database = require('./Database');
const Collection = require('./Collection');

let db = JSON.parse(fs.readFileSync(`${dir}/config.json`));

const createCollection = function(name, callback){
  Collection.create({
    dir: dir,
    db: db,
    name: name,
    callback: callback
  });
}

const createDatabase = function(name, callback){
  Database.create({
    dir: dir,
    db: db,
    name: name,
    callback: callback
  });
}

const connect = function(name, callback){
  Database.connect({
    dir: dir,
    db: db,
    name: name,
    callback: callback
  });
}

const insert =  function(collection, value, callback){
  Collection.insert.one({
    dir: dir,
    db: db,
    collection: collection,
    value: value,
    callback: callback
  });
}

const insertAll =  function(collection, values, callback){
  Collection.insert.many({
    dir: dir,
    db: db,
    collection: collection,
    values: values,
    callback: callback
  });
}

const getAll = function(collection, callback){
  Collection.get.all({
    dir: dir,
    db: db,
    collection: collection,
    callback: callback
  })
  // let path = `${dir}/${db.name}/${collection}`
  //
  // if(!fs.existsSync(path))
  //   throw `Collection ${collection} of Database ${db.name} does not exist!`;
  //
  // if(callback)
  //   callback();
  //
  // return JSON.parse(fs.readFileSync(`${path}/data.json`));
}

const getWhere = function(collection, conditions, callback){

  Collection.get.where({
    dir: dir,
    db: db,
    collection: collection,
    conditions: conditions,
    callback: callback
  })
  // let path = `${dir}/${db.name}/${collection}`;
  //
  // if(!fs.existsSync(path))
  //   throw `Collection ${collection} of Database ${db.name} does not exist!`;
  //
  // let data = JSON.parse(fs.readFileSync(`${path}/data.json`)).filter( (object) => {
  //   return (object[prop] === value) ? object : null;
  // });
  //
  // if(callback)
  //   callback();
  //
  // return data[0];
}

const deleteCollection = function(collection, database){
  if(!database)
    database = db.name;

  console.log(database);

  rimraf(`./${db}/${collection}`, function(err){
    if(err)
      console.log(err);
    console.log(`SUCCESS! Collection ${collection} of Database ${database} removed`);
  })

}

const printDB = function(){
  console.log(`${db.name} ->`)
  console.log(`${db.collections}`);
}

const printCollection = function(collection){
  let path = `${dir}/${db.name}/${collection}`;
  let data = JSON.parse(fs.readFileSync(`${path}/data.json`));

  console.log(`${collection} of DB ${db.name} ->`)
  console.log(data);
}

// createDatabase('testDB', ()=>{
//   createCollection('testCollection', ()=>{
//     connect('testDB');
//   });
// });

// insert('testCollection', {
//   name: "Rahul",
//   age: "20",
//   sex: "male"
// });

// insert('testCollection', {
//   name: "John",
//   age: "30",
//   sex: "male"
// });

// getWhere('testCollection', {
//   age: 20
// }, (data) => {
//   console.log(data);
// })
//exports.createCollection = createCollection
//createCollection('loggers')

//createDatabase("Diljit")
//cdcreateCollection("balu")

module.exports = {
  createCollection,
  createDatabase,
  connect,
  insert,
  getAll,
  getWhere,
  insertAll,
  deleteCollection,
  printDB,
  printCollection
};
