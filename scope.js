// Có 3 loại scope chính trong js: Global scope, block scope và function scope

// Variable được định nghĩa ở global scope sẽ có thể truy xuất ở bất kì đâu trong code.

// Variable được định nghĩa ở block scope sẽ chỉ được truy xất ở trong block đó mà thôi.

// Tương tự như block scope, variable được định nghĩa ở function scope sẽ chỉ đuợc truy xuất ở trong function.

let globalValue = 15; // global scope

function calculateValue() {
  let funcValue = 5; // function scope
  let result = funcValue + globalValue;
  console.log("result with global value", result);
  if (result) {
    let blockValue = 12;
    let result2 = blockValue + funcValue;
    console.log("result with block value", result2);
  }
  // console.log("get error when trying to access block value", blockValue);
}
// console.log("get error when try access function scope value", funcValue);

calculateValue();
