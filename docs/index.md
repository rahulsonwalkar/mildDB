
<title> Waterview : NoSQL Database </title>
Lightweight NoSQL Database for quick prototypes. Zero setup.

[Contribute](https://github.com/rahulsonwalkar/waterview)    |   [Creators](http://rahul.ru)   |   [NPM](https://npmjs.com/package/waterview) |

```npm install waterview```

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
