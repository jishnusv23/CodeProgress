const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello go to /sum route and give the query");
});

app.get("/sum", (req, res) => {
  const { num1, num2 } = req.query;
  let sum = parseInt(num1) + parseInt(num2);
  res.send(`sum of the values${sum}`);
});
app.listen(3001, () => {
  console.log("server is running");
});
