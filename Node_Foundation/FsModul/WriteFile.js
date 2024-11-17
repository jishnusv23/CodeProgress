const fs = require("fs");

const message = "This is the content of the write file.";
fs.writeFile("writeFile.txt", message, (err) => {
  if (err) {
    console.error("Error Writing file",err);
  }else{
    console.log('File create successfully')
  }
});
