const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", (req, res) => {
  let brand = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your Band Name is:</h1><h2>${brand}</h2>`);
});

app.listen(port, () => {
  console.log(`Server  is running on http://localhost:${port}`);
});
