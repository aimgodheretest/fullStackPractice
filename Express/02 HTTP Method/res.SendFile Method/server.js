const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "contact.html"));
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
