const fs = require("fs");

const readableStream = fs.createReadStream("DataStream.txt", {
  encoding: "utf-8",
});
const writeableStream = fs.createWriteStream("piping.txt");
writeableStream.write("something");

readableStream.pipe(writeableStream);

readableStream.on("end", () => {
  console.log("file copied successfully");
});
