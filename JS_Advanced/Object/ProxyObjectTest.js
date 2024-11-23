const targetObject = {
  name: "jishnu",
  age: 20,
};

const handler = {
  get: function (target, property) {
    console.log(`property ${property} was accessed`);
    return target[property] || "no property";
  },
  set: function (target, property, value) {
    if (property == "age" && typeof value !== "number") {
      throw new Error("Invalid type property");
    }
    target[property] = value;
    return true;
  },
};

// const proxyObject = new Proxy (targetObject, handler);
// console.log(proxyObject.name)
// console.log(proxyObject.age)
// proxyObject.age=90
// console.log(proxyObject.age)

try {
  // proxyObject.age='90'
} catch (error) {
  console.error(error.message);
}

// Q. How can you use a JavaScript Proxy to create a "read-only" object, where any attempt to modify its properties throws an error?

const targetObject2 = {
  name: "jishnu SV",
  age: 21,
};

const handler2 = {
  set: function (target, property, value) {
    throw new Error(
      `Connnot Modify property ${property},This object is read-only`
    );
  },
};

const readOnly = new Proxy(targetObject2, handler2);

try{
    readOnly.age = 43;
}catch(error){
    console.error(error?.message);
    
}