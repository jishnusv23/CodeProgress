const fs = require("fs");

const writeableStream = fs.createWriteStream("DataStream.txt");

writeableStream.write("This is the first line of the file.\n");
writeableStream.write("This is the second line of the file.\n");
writeableStream.write("This is the third line of the file.\n");

writeableStream.end(() => {
  console.log("Data has been written to WriteStream.txt successfully")
});
