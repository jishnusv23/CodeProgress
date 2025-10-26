const express = require("express");
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const numsCPUs = os.cpus().length;

  //create a worker process for each cup core
  for (let i = 0; i < numsCPUs; i++) {
    cluster.fork();
  }

  //event listener for the worker process die

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died,Restarting....`);
    cluster.fork(); // automatically restart the deid worker
  });
} else {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    console.log(`worker ${process.pid} handling request`);
    res.send(`Hello From Worker ${process.pid}`);
  });
  const PORT=3000
  app.listen(PORT,()=>{
    console.log(`server is runign http://localhost:${PORT} Worker ID:${process.pid}`)


  })
  process.on('SIGTERM',()=>{
    console.log(`Worker ${process.pid} shuttingDown...`)
    Server.close(()=>process.exit(0))
  })
}
