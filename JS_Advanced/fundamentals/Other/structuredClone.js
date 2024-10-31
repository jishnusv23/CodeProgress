// Example: Cloning a simple object
const original = {
  name: "Alice",
  age: 30,
  nested: {
    address: "123 Main St",
    city: "Wonderland",
  },
};

const clone = structuredClone(original);

// Modifying the clone
clone.name = "Bob";
clone.nested.city = "New Wonderland";

console.log(original.name); // Output: "Alice"
console.log(original.nested.city); // Output: "Wonderland"
console.log(clone.name); // Output: "Bob"
console.log(clone.nested.city); // Output: "New Wonderland"
