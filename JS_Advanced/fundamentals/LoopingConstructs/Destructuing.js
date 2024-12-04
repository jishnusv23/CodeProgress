const person = {
  name: "jishnu",
  email: "jishnusv@gmail.com",
  age: 29,
};

const { name, email, age } = person;
// console.log("🚀 ~ file: Destructuing.js:8 ~ email:", email);
// console.log("🚀 ~ file: Destructuing.js:8 ~ name:", name);

//proxy

const handler = {
  get: function (obj, properties) {
    return obj[properties];
  },
  set:function(obj,properties,value){
    obj[properties]=value
    
  }
};

const proxy = new Proxy(person, handler);

console.log(proxy.name)