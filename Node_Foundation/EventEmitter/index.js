const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

function handleEventEmitter(data) {
  console.log("My Event was trigger", data);
}
myEventEmitter.on("MyEvent", handleEventEmitter);
myEventEmitter.emit("MyEvent", { message: "Oke" });
myEventEmitter.off('MyEvent',handleEventEmitter)
myEventEmitter.emit('MyEvent',{message:"stop"})