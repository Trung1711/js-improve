// 1 function có thể nhận 1 function khác là đối số hoặc có thể trả về 1 function.
var arr = [2, 4, 6, 8];

function cloneAndSquare(arrInput) {
  var arrOuput = [];
  for (let i = 0; i < arrInput.length; i++) {
    arrOuput.push(arrInput[i] * arrInput[i]);
  }
  return arrOuput;
}

function cloneAndDivide(arrInput) {
  var arrOuput = [];
  for (let i = 0; i < arrInput.length; i++) {
    arrOuput.push(arrInput[i] / 2);
  }
  return arrOuput;
}

function cloneAndDothing(arrInput, func) {
  //callback - func
  var arrOuput = [];
  for (let i = 0; i < arrInput.length; i++) {
    arrOuput.push(func(arrInput[i])); // lời gọi hàm nằm ở đây
  }
  return arrOuput;
}

function square(num) {
  return num * num;
}

console.log(cloneAndSquare(arr));
console.log(cloneAndDivide(arr));
console.log(cloneAndDothing(arr, square)); // khi đối xử với function như tham số, thì sẽ bỏ (), vif đây ko phải là lời gọi hàm
