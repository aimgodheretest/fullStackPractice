const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Chapter:1 Learn how to implement basic server");
});

let port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
