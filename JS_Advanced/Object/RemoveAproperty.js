const obj = { a: 1, b: 2, c: 3 };
// how to delete property in a object

delete obj.b
console.log(obj)

let {age,...newObj}=obj
console.log(newObj)