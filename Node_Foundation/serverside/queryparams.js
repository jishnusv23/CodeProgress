const express = require("express");
const app = express();

const PORT = 3001;

app.get("/sum", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  console.log("🚀 ~ file: queryparams.js:8 ~ app.get ~ num1:", num1);
  const num2 = parseFloat(req.query.num2);
  console.log("🚀 ~ file: queryparams.js:10 ~ app.get ~ num2:", num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send("Please Provide Valid Number");
  }
  const sum = num1 + num2;

  res.send(`sum of the ${num1} and ${num2} sum :${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
