const { EventEmitter } = require("events");

const chatEmitter = new EventEmitter();

const logMessage = (msg) => {
  console.log(`new message:${msg}`);
};

//Register  the event listener
chatEmitter.on("message", logMessage);

//emit events
chatEmitter.emit("message", "Hello this is the first message");
chatEmitter.emit("message", "Hello this is the second message");

//remove the 'message' event listener
chatEmitter.removeListener("message", logMessage);

//emit another event this will not trigger the listener
chatEmitter.emit("message", "This message will not be display");
