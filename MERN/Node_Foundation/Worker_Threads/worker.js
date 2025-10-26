const {
  Worker,
  parentPort,
  workerData,
  isMainThread,
} = require("worker_threads");

function heavycomputation(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  return sum;
}

if (isMainThread) {
  console.log("starting main thread");

  //create a worker thread
  const worker = new Worker(__filename, {
    workerData: 10000, //Pass data to the worker
  });

  //Listen for message from the worker
  worker.on("message", (result) => {
    console.log(`Result from the worker:`, result);
  });

  //handle error
  worker.on("error", (err) => {
    console.error("worker error", err);
  });

  //handle worker exit
  worker.on("exit", (code) => {
    console.log(`Worker stopped with exit code ${code}`);
  });
} else {
  console.log(`worker recived : ${workerData}`);

  const result = heavycomputation(workerData);

  parentPort.postMessage(result);
}
