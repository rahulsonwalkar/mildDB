
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
 - Create a REST API with Node, Waterview and Express

Documentation:
 - [Create a Database](#getting-started-running-server-locally)
 - [Create a Collection]
 - [Connect to an existing Database]
 - [Insert an entity]
 - [Insert multiple entities]
 - [Get an entity]
 - [Get multiple entities]
 
