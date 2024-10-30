const validator = {
  set: function (obj, prop, value) {
    if (prop === "age" && (typeof value !== "number" || value < 0)) {
      throw new TypeError("Age must be a positive number.");
    }
    obj[prop] = value;
    return true;
  },
};

// const person = new Proxy({}, validator);
// person.age = 25; // Works
// person.age = -1; // Throws TypeError

const logger = {
  get: function (obj, prop) {
    console.log("Accessing propertyes:", prop);
  },
  set: function (obj, prop, value) {
    console.log(`setting property:${prop}:value:${value}`);
    obj[prop] = value;
    return true;
  },
};

const data = new Proxy({}, logger);
data.name='jishnu'
console.log(data.name)
