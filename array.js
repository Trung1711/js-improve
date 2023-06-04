let numArray = [1, 12, 5, 2, 4];
let strArray = ["zone", "apple", "lemon", "width"];
// sort ============
console.log(
  "sort - num array",
  numArray.sort((a, b) => a - b)
);
console.log("sort - string array", strArray.sort());

// loop

for (let i = 0; i < numArray.length; i++) {
  console.log("aaa");
}

numArray.forEach((num) => console.log("a", num));

// convert array to string

const fruits = ["apple", "mazanas", "lazy"];
console.log("array -> string", fruits.toString());

//push and pop => add/remove item to last array
//unshift and shift => add/remve item to first array

// for of cho array
const arr1 = [1, 23, 4, 5];

for (const x of arr1) {
  console.log("x", x);
}

// for in cho object -> access lay key

const obj = { a: "1", b: "2" };

for (const a in obj) {
  console.log("key", a);
}
