function taskFirst(data, callback) {
  setTimeout(() => {
    console.log(`first task ${data}`);
    callback(data + 1);
  }, 1000);
}
function taskSecond(data, callback) {
  setTimeout(() => {
    console.log(`second task ${data}`);
    callback(data + 1);
  }, 1000);
}
function taskThird(data, callback) {
  setTimeout(() => {
    console.log(`third ${data}`);
    callback(data+1)
  }, 1000);
}

taskFirst(1, (result1) => {
  console.log(`result1 :${result1}`);
  taskSecond(result1, (result2) => {
    console.log(`result2 : ${result2}`);
    taskThird(result2,(result3)=>{
      console.log(`result3 : ${result3}`)
    })
  });
});
