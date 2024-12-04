function FirstCallback(data,callback){
  setTimeout(() => {
    console.log(data,'first')
    callback(data+1)
  }, 1000);
}
function SecondCallback(data,callback){
  setTimeout(() => {
    console.log(data,'second')
    callback(data+2)
  }, 1000);
}
function ThirdCallback(data,callback){
  setTimeout(() => {
    console.log(data,'Third')
    callback(data+3)
  }, 1000);
}

FirstCallback(1,(data)=>{
  SecondCallback(data,(data)=>{
    ThirdCallback(data,(data)=>{
      console.log(data)
    })
  })
})