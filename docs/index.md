
<title> Waterview : NoSQL Database </title>
<p align="center"> Lightweight NoSQL Database for quick prototypes. Requires zero setup. </p>

[Contribute](https://github.com/rahulsonwalkar/waterview)    |   [Creators](http://rahul.ru)   |   [NPM](https://npmjs.com/package/waterview) | 

Installation : `npm install waterview`

Quick example:
##### /db_config.js

```js
const waterview = require('waterview')

waterview.createDatabase('facebook', function(){
  waterview.createCollection('users')
})
```

##### /server.js

```js
waterview.insert('users', {
  "name" : "Rahul Sonwalkar",
  "email" : "rahul@example.com",
  "age" : 20,
  "drivers_license" : true
})
```

More Examples:
 - [ VIDEO: REST API in 5 mins with Node, Waterview and Express](https://www.youtube.com/watch?v=igANLYplF0A)

Documentation:
 - [Create a Database](#create-a-new-database)
 - [Connect to a Database](#connect-to-a-database)
 - [Create a Collection](#create-a-new-collection)
 - [Insert an entity](#insert-an-entity)
 - [Insert multiple entities](#insert-multiple-entities)
 - [Get an entity](#get-an-entity)
 - [Get multiple entities](#get-all-entities)
 
#### Installation

```
npm install waterview --save
```

#### Import
```js
const waterview = require('waterview')
```

#### Create a new Database
```js
waterview.createDatabase('myDB')
```
Creates a new database called *myDB* and establishes a connection.

#### Connect to a Database
```js
waterview.connect('myDifferentDB')
```
Establishes a connection with an existing database. Throws an error if the database doesn't exist.

#### Create a new Collection
```js
waterview.createCollection('users')
```
Creates a collection called *users* under the connected database

#### Insert an entity
```js
waterview.insert('users', {
  "name" : "Rahul Sonwalkar",
  "email" : "rahul@example.com",
  "age" : 20,
  "drivers_license" : true
})
```

#### Insert multiple entities
```js
waterview.insertAll('users', [
  {
    "name" : "Rahul Sonwalkar",
    "email" : "rahul@example.com",
    "age" : 20,
    "drivers_license" : true
  },
  {
    "name" : "John Doe",
    "email" : "johndoe@mail.com",
    "age" : 41,
    "drivers_license" : false
  },
  {
    "name" : "Gordon Ramsay",
    "email" : "ramsay@mail.com",
    "age" : 55,
    "drivers_license" : true
  }
])    
```
Inserts all multiple entities into *users* collection

#### Get an entity
```js
waterview.getWhere('users', 'email', 'rahul@example.com')

>> {
    "name" : "Rahul Sonwalkar",
    "email" : "rahulsonwalkar23@gmail.com",
    "age" : 20,
    "drivers_license" : true
   }
```
Returns the first entity where *email* is *rahul@example.com*

#### Get all entities
```js
waterview.getAll('users')
```
Returns an array containing all entities in *users* collection
     
