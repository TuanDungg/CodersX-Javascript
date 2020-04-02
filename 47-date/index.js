/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
    // Write code here...
    let day  = new Date(dateString);
    if((day.getDay()==0) || (day.getDay()==6)){
        return true;
    }
    return false;
  }

  /**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  // Write code here...
  return (toDate.getTime() - fromDate.getTime())/(24*3600*1000);
}

/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  // Write code here...
  return new Date(date.getTime() - n*24*3600*1000);
}

/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
    // viết code ở đây
    return Math.abs((new Date(a).getTime())-(new Date(b).getTime()));
   }