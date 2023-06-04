// data types
// nếu adding number + string => js sẽ đối xử number as string

const adding1 = 16 + "He";
console.log("adding1", adding1);

// nếu adding number => cho tới khi gặp string sẽ đối xử bọn kia như number
const adding2 = 16 + 4 + "concon";
console.log("adding2", adding2);

//nếu adding string trước => các number sau vẫn sẽ đối xử là string

const adding3 = "concu" + 16 + 4;
console.log("adding3", adding3);

// =========================================STRING=================================================

let text = "abcdefg";
console.log("length - text", text.length);
console.log(("index -string", text[3]));

let escapeText = 'He is a "Viking" from north';

// tách chuỗi string

let text1 = "Apple,Banana,Lemon";
let part = text1.slice(0, 5);
console.log("slice", part);

// ghép chuuỗi
let text2 = "hello";
let text3 = "world";
console.log("concat", text2.concat(text3, "to"));

//remove white space

let stringHasWhitepace = "              AAAAAA            ";
console.log("trim", stringHasWhitepace.trim());

//convert string to array

let stringHasArr = "Apple,Banana,Lemon";
console.log("arr", stringHasArr.split(","));

// convert number to string

let x = 203;
console.log("num -> string", x.toString());

// ========================================OBJECT==================

const obj = { name: "trung", age: 15, address: "lalaal" };

// get key
console.log("key", Object.keys(obj));
console.log("value", Object.values(obj));
Object.entries(obj).forEach(([k, v]) =>
  console.log(`key: ${k} and value: ${v}`)
);
