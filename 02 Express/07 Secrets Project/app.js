const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/check", (req, res) => {
  const pass = req.body["password"];
  if (pass !== "ILoveProgramming") {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
  res.sendFile(path.join(__dirname, "public", "secrets.html"));
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
