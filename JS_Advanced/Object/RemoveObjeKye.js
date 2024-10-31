//Remove Ojbect key that contain Odd Number

const myObject = {
  a: 10,
  b: 15,
  c: 20,
  d: 25,
};

function RemoveObjKey(myObject){
    for (let key in myObject) {
      if (myObject[key] % 2 !== 0) {
        delete myObject[key];
      }
    }
return myObject
}
console.log(RemoveObjKey(myObject))