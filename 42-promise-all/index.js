var axios = require('axios');
var link1 = 'https://jsonplaceholder.typicode.com/todos/1';
var link2 = 'https://jsonplaceholder.typicode.com/todos/2';
var link3 = 'https://jsonplaceholder.typicode.com/todos/3'

function getData(link){
  return new Promise(function(resolve, reject){
    axios.get(link).then(function(response){
        resolve(response.data);
    }).catch(function(err){
        reject(err);
    })
  });
}

Promise.all([
  getData(link1),
  getData(link2),
  getData(link3)
]).then(function(values){
  console.log(values);
}).catch(function(err){
  console.log(err);
});