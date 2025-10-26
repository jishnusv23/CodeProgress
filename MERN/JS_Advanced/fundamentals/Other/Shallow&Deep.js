//shallow copy

const original = { name: "peter", address: { city: "england" } };

const shallowClone = { ...original };

// console.log(original.address.city)

shallowClone.address.city = "kunnamkulam";

// console.log(original.address.city)

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//DeepClone
const originalDeep = { name: "trump", address: { city: "WhiteHouse" } };

const CloneDeep = JSON.parse(JSON.stringify(originalDeep));

// console.log(originalDeep.address.city)
CloneDeep.address.city = "newDelhi";
// console.log(originalDeep.address.city)

// ____________--------------------------------_________________________________________------------------------------------------__________________________________---------------------------------___________________

//Without inbuilt Deepclone

function deep(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};

  //recursively copy properties
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deep(obj[key]);
    }
  }
  return clone;
}

const original3 = {
  name: "malik",
  skill: ["shooter", "bombmaker"],
  address: { city: "iraq" },
};

const cloneObje = deep(original3);
cloneObje.address.city = "america";
cloneObje.skill.push('dev')

console.log('original',original3)
console.log('cloneObje',cloneObje)