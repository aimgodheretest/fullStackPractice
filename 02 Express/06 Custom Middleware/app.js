const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World...</h1>");
});

let prot = 3000;
app.listen(prot, (req, res) => {
  console.log(`Server is running on http://localhost:${prot}`);
});
