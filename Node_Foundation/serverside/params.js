const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey Are you looking for somethin");
});

app.get("/sum/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (isNaN(num1) || isNaN(num2)) {
    res.send("Please   Provide valid numbers");
  }
 const number1 = parseInt(num1, 10);
 const number2 = parseInt(num2, 10);


 const sum = number1 + number2;

 
 const evenOrOdd = sum % 2 === 0 ? "even" : "odd";

 res.send(
   `The sum of ${number1} and ${number2} is ${sum}, and it is ${evenOrOdd}.`
 );
});

app.listen(3001, () => {
  console.log(`server is runing on the port 3001`);
});
