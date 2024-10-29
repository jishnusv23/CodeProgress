//find the depest nested 
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};

function FindDeepestNestedObj(obj) {
  let deepestObj = obj;
  let maxDepth = 0;

  function traverse(obj, depth) {
    if (depth > maxDepth) {
      maxDepth = depth;
      deepestObj = obj;
    }
    Object.values(obj).forEach((value) => {
      if (typeof value == "object" && value !== null) {
        traverse(value, depth + 1);
      }
    });
  }
  traverse(obj, 0);
  return deepestObj;
}

// console.log(FindDeepestNestedObj(obj))
//*----------------------------------------------------------------------------------------------------------------------------

let obj3 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};
function ConuntOjbectUseFlat(obj3) {
  return Object.entries(obj3).flat(Infinity).length - 1;
}
// console.log(ConuntOjbectUseFlat(obj3))
function ConuntOjbectUseRecursion(obj3) {
  let count = 0;

  function traverse(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++;
      }
      if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key]);
      }
    }
  }
  traverse(obj3);
  return count;
}
console.log(ConuntOjbectUseRecursion(obj3));
//*----------------------------------------------------------------------------------------------------------------------------

//*sum of the numbers only
const obj4 = {
  a: 1,
  b: "hello",
  c: 3,
  d: true,
  e: 5,
};

function SumOfNumeric(obj4) {
  return Object.values(obj4).reduce((acc, cuu) => {
    if (typeof cuu == "number") {
      acc += cuu;
    }
    return acc;
  }, 0);
}

// console.log(SumOfNumeric(obj4));
//*----------------------------------------------------------------------------------------------------------------------------

//sum of the objectvalues
const obj5 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
};

function SumOfObjRecur(obj5) {
  let sum = 0;
  for (let key in obj5) {
    if (typeof obj5[key] == "object") {
      sum += SumOfObjRecur(obj5[key]);
    } else {
      sum += obj5[key];
    }
  }
  return sum
}
console.log(SumOfObjRecur(obj5))
