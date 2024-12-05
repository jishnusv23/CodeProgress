const express=require('express')
const app=express()

class CustomeError extends Error{
    constructor(status,message){
        super(message)
        this.status=status
    }

}
function handleMiddle(req,res,next){
    if(req.url=='/profile'){
        return next(new CustomeError(400,'/profile page is blocked admin'))
    }   
    next() 
}


app.get('/profile',handleMiddle,(req,res,next)=>{
    console.log('first')
    res.send('Welcome your profile')
})


app.use((err,req,res,next)=>{
    if(err instanceof CustomeError){
        return res.status(err.status).json({error:err.message})
    }else{
        return res.status(500).json({error:"internal server error"})
    }
})


app.listen(3000,()=>{
    console.log(`server is runing http://localhost:3000`)
})