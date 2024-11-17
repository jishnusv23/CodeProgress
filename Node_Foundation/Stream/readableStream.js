const fs = require("fs");

const readableStream = fs.createReadStream("DataStream.txt", {
  encoding: "utf-8",
});

readableStream.on("data", (chunk) => {
  console.log(chunk.length);
  console.log(chunk);
});

readableStream.on("end", () => {
  console.log("Finished reading file");
});

readableStream.on('error',(error)=>{
    console.error('something went wrong',error);
    
})