var axios = require('axios');
var fs = require('fs');

function getData(){
    return new Promise(function(resolve, reject){
        fs.readFile('./data.json', { encoding: 'utf8'}, function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

function getLink(){
    return axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function(response){return response.data;});
}

async function run(){
    var result1 = await getData();
    var result2 = await getLink();
    return [result1, result2];
}

run().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(error);
});