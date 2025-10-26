const { error } = require("console");
const fs = require("fs");

fs.writeFile("delete.txt", "oke da", (Err) => {
  if (Err) {
    console.error("somethign wrong", error);
  }
  fs.unlink("delete.txt", (err) => {
    if (err) {
      console.error("something wrong delete", err);
    }else{
        console.log('successfulyy')
    }
  });
});
