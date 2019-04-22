//File chứa mã lệnh javacsript. Nhưng được server Node thực thi, chứ không phải cho brower client

//1:  xuất thông tin
console.log('Hello');

//2: hàm

var x = 10;
var y = 20;
//2.1 Hàm 1 cơ bản
/* function sum(x, y) {
    return x + y;
}*/

//2.2 Hàm rút gọn: 
// Bến trái dấu = là  danh sách tham số truyền vào (x,y)
// Bỏ ngoặc và return
var sum = (x, y) => x + y

var s = sum(x, y);
console.log(`${x} + ${y} = ${s}`); // $ chỉ có Node V6 trở lên mới hỗ trợ