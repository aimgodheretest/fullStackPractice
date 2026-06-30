const express = require("express");
let port = 3000;
const app = express();

function logger(req, res, next) {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
