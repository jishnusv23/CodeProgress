//-----------------------------------------------------------------------------------
//hoc


function hocExample(data, callback) {
  const result = [];
  for (let ele of data) {
    result.push(callback(ele));
  }
  return result;
}
const number = [49, 45, 64, 23, 53, 45];
console.log(hocExample(number, (num) => num * 2));
//-------------------------------------------------------------------------------------

//currying
function multiply(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
const mul = multiply(3)(4)(5);
// console.log(mul);

//---------------------------------------------------------------------------------------

//function composition
const multiplycomposition = (a) => (b) => a * b;
const addcompon = (a) => (b) => a + b;
const mulco = multiplycomposition(3);
const addco = addcompon(4);
const resultco = addco(mulco(5));
//first 5*3 =15
//second 15+4 =19
// console.log(resultco)

//-----------------------------------------------------------------------------------------

//closuer
function counter() {
  let count = 0;
  return function () {
    count++
    console.log(count)
  };
}
const increment=counter()
// increment()
// increment()

function outerFunction(outervariable) {
  return function innerFunction(innervariable) {
    console.log(`outerVariable : ${outervariable}`);
    console.log(`innerVariable :${innervariable}`);
  };
}

const closureEx = outerFunction("Hello");
closureEx("World");