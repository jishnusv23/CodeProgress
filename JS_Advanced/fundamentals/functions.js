// Regular function

function RegularFuction(name) {
  return `Hello ${name}`;
}
console.log(RegularFuction("jishnu"));

//Arrow function

const FindSum = (a, b) => a + b;
const person = {
  name: "Jishnu",

  sayHello: () => {
    console.log(this.name);
  },
};

//IIFEs
(function (name) {
  console.log("immediately working this dear :" + name);
})("jishnu");

const counter = (() => {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();
console.log(counter.getCount()); //0
console.log(counter.increment()); //1
console.log(counter); //error count is not defined

//callback hell

getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        console.log("yes last ", d);
      });
    });
  });
});

//Better solution usig Promises async/await

getData()
  .then((a) => getMoreData(a))
  .then((b) => getMoreData(b))
  .then((c) => console.log(c));

// Recursive function
const fibonacci = (n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(6))//8    
