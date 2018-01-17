
<title> Waterview : NoSQL Database </title>
<p align="center"> Lightweight NoSQL Database for quick prototypes. Requires zero setup. 

[Contribute](https://github.com/rahulsonwalkar/waterview)    |   [Creators](http://rahul.ru)   |   [NPM](https://npmjs.com/package/waterview) | 
</p>
 
#### Installation : ```npm install waterview```

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
