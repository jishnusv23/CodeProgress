const users = [
  { id: 1, name: "john", role: "Admin" },
  { id: 2, name: "dohn", role: "User" },
  { id: 3, name: "steph", role: "User" },
];
// outputlike GroupBy={Admin:[{id:1,name:'john',role:"Admin"}],User:[ {id:2,name:'dohn',role:"User"},
//     {id:3,name:"steph",role:"User"}]}

function GroupBy(array, key) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    const groupByKey = array[i][key];
    if (!result[groupByKey]) {
      result[groupByKey] = [];
    }
    result[groupByKey].push(array[i]);
  }
  return result;
}

console.log(GroupBy(users, "role"));
