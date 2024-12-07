//1path
//2query
// const express=require('express')
// const app=express()


// app.get('/sum/:num1',(req,res)=>{
//     const {num1}=req.params
//     const {num2}=req.query

//     let sum=parseFloat(num1)/parseFloat(num2)
    
//     res.send(`sum of the values ${sum}`)

// })

// app.listen(3000,()=>{
//     console.log(`server is ruing http://localhost:3000`)
// })


//mark 
// db.students.find({$expr:{$gt:["$mark","$passmark"]}})
// db.students.aggregate({$match:{class:10}},{$group:{_id:null,avgMark:{$avg:"$mark"}}})
//find the who large mark and avg mark 
//db.students.aggregate({$facet:{[largeset:{group:{_id:null,larger:{$max:"$mark"}}},avg:{}]}})

//db.students.aggregate({name:"/^aeiouv/$"})