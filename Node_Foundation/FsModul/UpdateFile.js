const fs = require("fs");

const message = "\nThis is the appended content.";
fs.appendFile("writeFile.txt", message, (err) => {
  if (err) {
    console.error("something wrong update file", err);
  } else {
    console.log("Updatesuccessfully");
  }
});
