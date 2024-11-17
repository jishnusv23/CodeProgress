const fs = require("fs");

fs.readFile("writeFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log(data);
  }
});
