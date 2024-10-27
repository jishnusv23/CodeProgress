//CallbackHell without usiing promise

function getArticles(userId) {
  return new Promise((resovle) => {
    setTimeout(() => {
      console.log("userId", userId);
      resovle({ username: "DevJishnu" });
    }, 100);
  });
}

function getUserData(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("userName", name);
      resolve({ name: "JISHNU SV" });
    }, 1000);
  });
}
function getAddress(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("userDetaiils", user);
      resolve({ address: "123street" });
    }, 1000);
  });
}

// getArticles(20, (user) => {
//   console.log("Fetch articles", user);
//   getUserData(user.username, (name) => {
//     console.log(name);
//     getAddress(name, (item) => {
//       console.log(item);
//     });
//   });
// });

//How to avoid callback hell

getArticles(20)
  .then((user) => {
    console.log("user");
    return getUserData(user.username);
  })
  .then((user) => {
    console.log(user, "-------");
    return getAddress(user.address);
  })
  .then((user) => {
    console.log("address", user);
  });
