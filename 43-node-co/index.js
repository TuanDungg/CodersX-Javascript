var fs = require('fs');
var co = require('co');
var axios = require('axios');

var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
// cach 1
// var getData = co.wrap(function*(files){
//     let result = [];
//     for(let file of files){
//         result.push(yield axios.get(file).then(function(response){
//             return response.data;
//         }))
//     }
//     return result
//   });

// getData(urls).then(function(values){
//       console.log(values);
//   }).catch(function(err){
//       console.log(error);
//   })

//cach 2

var getData = co.wrap(function*(files){
    var result = yield files.map(function(file){
        return axios.get(file).then(function(response){
            return response.data;
        });
    });
    return result;
});

getData(urls).then(function(values){
          console.log(values);
      }).catch(function(error){
          console.log(error);
      })

