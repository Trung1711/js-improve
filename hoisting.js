// Hoisting là behavior mà variable và function loại declaration được move lên trên cùng trong quá trình complication,
// trước khi code được thực thi. Do đó ta có thể dùng nó trước khi định nghĩa nó trong code.

debugger;

console.log("before assigned VAR", myValue); // undefined until we assigned value for variable
var myValue = 15;
console.log("after assigned VAR", myValue); // undefined until we assigned value for variable

// báo lỗi, dù variable khai báo với const, let được hoisting, nhưng chỉ có thể truy xuất khi
// mà được initalize.

console.log("before assigned CONST", errorValue);
const errorValue = 10;

declaFunc();
function declaFunc() {
  console.log("call before declaration");
}

// báo lỗi expressFunc is not a function, nếu được khai báo kiểu expression, sẽ không được truy xuất
// nếu chưa được declare => undefined()
expressFunc();
var expressFunc = function () {
  console.log("call get error");
};

// Quan trọng:
// declare: là khai báo biến đó : dạng var x; let y;
// initialize: là assign giá trị cho biến đó lần đầu tiên: var x = 2;
