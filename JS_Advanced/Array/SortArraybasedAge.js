const students = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 23 },
  { name: "Diana", age: 21 },
];

function SortStudent(arr){
    return arr.sort((a,b)=>a.age-b.age)
}
console.log(SortStudent(students))