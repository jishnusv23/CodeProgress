const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first promise");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second promise");
  }, 4000);
});

Promise.all([promise1,promise2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log('something wrong',err)
})
   
