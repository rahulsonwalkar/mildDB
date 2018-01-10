const waterview = require('../lib')
 // waterview.createDatabase('rahul', function(){
 //   waterview.createCollection('users')
 // })
// waterview.insert('users', {
//   "name" : "Rahul Sonwalkar",
//   "age" : 19,
//   "email" : "rahulsonwalkar23@gmail.com"
// })
//waterview.connect('rahul')
//
//console.log(waterview.getAll('users'))
//
 //console.log(waterview.getWhere('users', 'age', 19))
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

waterview.deleteCollection('users')

/*  TO-DOs:
1. Test delete operations
2. Test print operations
3. Organize manual tests of features
4. Beautify JSON
5. Chalk for SUCCESS or ERROR
*/
