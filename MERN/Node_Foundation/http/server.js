// const http = require("http");
// const fs = require("fs");
// const { start } = require("repl");

// const server = http.createServer((req,res) => {
//     res.write('HEllo')
//     res.end('ok')

// });

// server.listen(3000,()=>{
//     console.log("start")
// })

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/read-file") {
    const filePath = path.join(__dirname, "httpFile.txt");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Error reading the file");
        return;
      }
      req.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log(`server is runing`);
});
