// Nó cung cấp short hand syntax để extract giá trị từ một complex structure (array, object)

const numbers = [1, 2, 3, 4, 5];

const [a, b, , c] = numbers;

console.log("a", a); // => 1
console.log("c", c); // dùng coma để skip một giá trị đuợc unpack từ mảng => 4

let newObj = { name: "Trung", age: 15 };

const { name, age } = newObj;
console.log("age", age);

// với nested object

const nestedObj = {
  ten: "TRung",
  age: 15,
  address: { street: "123", phoneCall: "01234" },
};

const {
  ten,
  address: { phoneCall },
} = nestedObj;

console.log("phone", phoneCall);
