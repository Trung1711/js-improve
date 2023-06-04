// arrow function

printHello = (val, val2) => {
  console.log("Hello em" + val + val2);
};

printHello(" cc", " cl");

// remove parentheses // declaration

printLoveU = (val) => {
  console.log("I love U" + val);
};
printLoveU("like");

// không cần phải có return statement và {} nếu body chỉ có single expression

calCu = (a, b) => a * b;

console.log(calCu(2, 3));

// expression

const expressionFunc = function () {
  return "heheh";
};
