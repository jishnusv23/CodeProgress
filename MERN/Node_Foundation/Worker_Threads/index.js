const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
const path = require("path");

// console.log(Woker);
if (isMainThread) {
  console.log("Starting main thread");

  //create a worker
  const worker = new Worker(__filename, {
    workerData: { number: 9 },
  });

  //recive a message form worker
  worker.on("message", (result) => {
    console.log("Result from Woker:", result);
  });

  //handle Error
  worker.on("error", (err) => {
    console.error("Worker Error", err);
  });

  //worker completed
  worker.on("exit", (code) => {
    console.log(`Worker Stopped with exit code ${code}`);
  });
} else {
  //worker thread code

  const { number } = workerData;

  //perform some computation

  function heavycomputation(num) {
    console.log(`worker proccessid ${process.pid}  processing number`);
    let result = 0;
    for (let i = 0; i < num * 1000000; i++) {
      result += Math.sin(i);
    }
    return result;
  }
  const comutation = heavycomputation(number);

  parentPort.postMessage({
    number,
    result:comutation
  });
}
