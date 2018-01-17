
<title> Waterview : NoSQL Database </title>
Software Engineering Intern @ Rechat.com | President @ HackersUTD

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
