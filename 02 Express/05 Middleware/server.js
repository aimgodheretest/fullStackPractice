const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});
let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
