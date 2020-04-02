// /**
//  * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
//  */
// function countDown(x) {
//     let  i = x;
//     var x = setInterval(function(){
//       console.log(i);
//       i--;
//       if(i < 0){
//         clearInterval(x);
//       }
//     }, 1000);
//    }
   
//    countDown(5);

//    /**
//  * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
//  */
// function countDown(x) {
//     return new Promise(function(resolve, reject){
//       let iv = setInterval(function(){
//         console.log(x);
//         x--;
//         if(x<0){
//           clearInterval(iv);
//           resolve();
//         }
//       },1000);
//     });
//   }
  
//   function sayHappyNewYear() {
//     console.log('Happy new year');
//   }
  
//   countDown(5).then(sayHappyNewYear);

//   viết hàm đếm từ a đến b cách nhau 1s, trả về 1 promise, resolve khi đếm xong

function countFrom(a,b){
    return new Promise(function(resolve, reject){
        let iv = setInterval(function(){
            console.log(a);
            a++;
            if(a>b){
                clearInterval(iv);
                resolve('Done');
            }
        },1000);
    });
}

countFrom(1,10).then(function(result){
    console.log(result);
})