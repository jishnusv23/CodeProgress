function Counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let increment = Counter();
increment();
increment();
increment();

// another example make counter

function CounterClosure() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(" after increment:", count);
    },
    decrement: function () {
      count--;
      console.log(" after decrement:", count);
    },
    getCount: function () {
      return count;
    },
  };
}

const resultCounter = CounterClosure();
resultCounter.increment();
resultCounter.increment();
console.log(resultCounter.getCount());

//another sample

function outerFunction(outervariable) {
  return function innerFunction(innervariable) {
    console.log(`outerVariable ${outervariable}`);
    console.log(`innerVariable ${innervariable}`);
  };
}

const closureEx = outerFunction("hello");
closureEx("world");
