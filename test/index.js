const waterview = require('../db')
 waterview.createDatabase('rahul', function(){
   waterview.createCollection('users')
 })
// waterview.insert('users', {
//   "name" : "Rahul Sonwalkar",
//   "age" : 19,
//   "email" : "rahulsonwalkar23@gmail.com"
// })
// waterview.connect('rahul')
//
// console.log(waterview.getAll('users'))
//
// console.log(waterview.getWhere('users', 'age', 19))
//
//
// waterview.insertAll('users', [{
//   "name" : "Tanuj Tiwari",
//   "age" : 20,
//   "email" : "tanuj98@gmail.com"
// }, {
//   "name" : "Billi Pandey",
//   "age" : 20,
//   "email" : "billipandey@gmail.com"
// }])
