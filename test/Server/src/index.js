// //encrypt the data
// //plaintext -GET
// // EncryptText-GEt
// const express=require('express')
// const app=express()
// const fs=require('fs')
// const crypto=require('crypto')

//  const middleware=()=>{
//     throw new Error('the route is blocked')

//  }
// app.get('/',(req,res)=>{
//     fs.readFile('FileData.txt','utf-8',(err,data)=>{
//         if(err){
//             res.send(`Something Wrong+${err}`)
//         }else{
//             res.send(`file reading :${data}`)
//         }
//     })
// })
// app.get('/Encryp',middleware,(req,res)=>{
//     // fs.readFile('FileData.txt','utf-8',(err,data)=>{
//     //     if(err){
//     //         res.send('something woring')
//     //     }else{
//     //         const dataEncryp=crypto(data)
//     //         res.send(dataEncryp)
//     //     }
//     // })
//     console.log('first')
// })

// app.use((err,req,res,next)=>{
//     if(err){
//         res.send('the route is blocked')
//     }else{
//         next()
//     }
// })


// app.listen(3000,()=>{
//     console.log(`server is runing `)
// })


// const eventEmiter=require('events')
// const myEmitter=new eventEmiter()

// myEmitter.on('myData',(message)=>{
//     console.log('first',message)
// })
// myEmitter.emit('myData','jishnu')