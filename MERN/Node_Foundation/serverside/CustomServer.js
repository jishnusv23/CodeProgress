const express = require("express");
const app = express();

class CustomeError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

app.get("/", (req, res, next) => {
  res.send("HelLo please check this /sum/numbser1/number2");
});

app.use("/sum/:num1/:num2", (req, res, next) => {
  const { num1, num2 } = req.params;
  if (isNaN(num1) || isNaN(num2)) {
    return next(new CustomeError(400, "Both parameters must be number"));
  }
  const sum=parseFloat(num1)+parseFloat(num2)
  res.send(`sum of the params ${sum}`)
});

app.use((err,req,res,next)=>{
    if(err instanceof CustomeError){
        res.status(err.status).json({error:err.message})
    }else{
        res.status(500).json({error:"Internal server error"})
    }
})
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
