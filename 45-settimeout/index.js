//cau1

/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
function doSomething(){
    console.log('finish');
  }
  
  function doAfter(ham, thoigian){
    setTimeout(ham, thoigian);
  }
  
  doAfter(doSomething, 1000);

  //cau 2
  /**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */
function doAfter(fcn, x) {
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve(fcn());
      },x);
    });
}

function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);
// Expect: 
// Đợi 1s
// Hello
// Goodbye