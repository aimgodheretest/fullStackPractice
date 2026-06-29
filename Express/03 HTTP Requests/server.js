const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcom to Home Page!</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Welcom to About Page!</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Welcom to contact Page!</h1>");
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server i running on http://localhost:${port}`);
});
