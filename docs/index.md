<h1 align="center"> Waterview </h1>
<center>

<p align="center">

<b>A NoSQL Database like thing for quick prototypes</b>

</p>

<p align="center">


<img src="https://i.imgur.com/8pwaQMQ.jpg"/>

</p>

## <h3 align="center"> Get started </h3>

Directly jump to quick examples code here.

Install the package with NPM
```

npm install waterview

```
Import the package in your codebase
```

const waterview = require('waterview')

```
## <h3 align="center"> Usage </h3>
Create a database
```

waterview.createDatabase('myApplication')    

```
>optionally pass a callback as second parameter

Create a collection (table)
```

waterview.createCollection('users')       

```
>optionally pass a callback as second parameter

Insert data into a collection
```

waterview.insert('users', {
  "name" : "Rahul Sonwalkar",
  "email" : "example@mail.com",
  "age" : 20,
  "drivers_license" : true
})

```
Get a specific object from collection (table)
```

waterview.getWhere('users', 'email', 'example@mail.com')      

//retrieves the user with example@mail.com email in users collection

```
Connect to an existing database
```

waterview.connect('myiOSApp')    

//connects to the waterview instance to Database myiOSApp     

```

Get all entities from a collection (table)
```

waterview.getAll('users')    

//returns an array of all entities in users collection     

```

Insert multiple entities from a collection (table)
```

waterview.insertAll('users', [
  {
  "name" : "Rahul Sonwalkar",
  "email" : "example@mail.com",
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
Upcoming features:

1. Custom schemas
2. Type checks
3. Sophisticated error handling

##### Creator
Rahul Sonwalkar - [Blog](http://rahul.ru/blog)
Website: http://rahul.ru
