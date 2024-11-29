const cluster = require("cluster");
const os = require("os");
const express = require("express");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process PID: ${process.pid}`);
  console.log(`Forking ${numCPUs} workers...`);

  // Fork a worker for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker process - Create an Express server
  const app = express();

  app.use(express.json());

  // Define a route
  app.get("/", (req, res) => {
    console.log(`Worker ${process.pid} handling request`);
    res.send(`Hello from Worker ${process.pid}`);
  });

  // Start the server and store the server instance
  const PORT = 3000;
  const server = app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started server on port ${PORT}`);
  });

  // Graceful shutdown
  process.on("SIGTERM", () => {
    console.log(`Worker ${process.pid} shutting down...`);
    server.close(() => process.exit(0));
  });
}

//SAME PORT BUT DIFFERENT IP ADDRESS 
