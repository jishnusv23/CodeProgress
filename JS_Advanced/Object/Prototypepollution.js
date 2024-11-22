// 1. Let's start with a normal object
const user = {};

// 2. This is what an attacker might do - pollute the Object prototype
user.__proto__.isAdmin = true;

// 3. Now create a completely new object
const newUser = {};

// 4. Check the polluted property
console.log(newUser.isAdmin); // Output: true

// Even though we never set isAdmin on newUser, it's true!
// This happens because ALL objects now inherit this polluted property

//Here's a real example how this could be dangerous
function checkAdmin(user) {
  if (user.isAdmin) {
    console.log("Access granded to admin panel");
  } else {
    console.log("Access denied");
  }
}

// Create a regular user
const bob = {
  name: "Bob",
  isAdmin: false, // Explicitly set to false
};

checkAdmin(bob); // Output: "Access granted to admin panel"
// Even though bob.isAdmin is false, the function still grants access!

// To fix this, you can:
// 1. Use Object.freeze to prevent prototype modification
Object.freeze(Object.prototype);

// 2. Or use Object.create(null) to create objects without prototype
const safeUser = Object.create(null);
safeUser.name = "Safe Bob";
console.log(safeUser.isAdmin); // Output: undefined (as expected)