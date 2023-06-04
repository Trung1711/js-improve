// dùng để manipulate iterable object like string or array, expand nó thành những phần nhỏ

// ----> expanding array, concat 2 array

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr, 4, 5];
const concatArr = [...arr, ...arr2];
console.log("new", newArr);
console.log("concat array", concatArr);

// -----> swallow copy array

let original = [1, 2, 3, 4];
let copy = [...original];
copy.push(12);
console.log("original vẫn giữ nguyên", original);
console.log("copy", copy);

// ------->  với việc update một object

const person = { name: "trung", age: 23 };
const updatePerson = { ...person, age: 14 };

console.log("update", updatePerson); // { name: "trung", age: 14}
