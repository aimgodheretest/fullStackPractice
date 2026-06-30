const express = require("express");

const app = express();

//GET
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
//POST
app.post("/register", (req, res) => {
  res.sendStatus(201);
});
//PUT
app.put("/user/murli", (req, res) => {
  res.sendStatus(200);
});
//PATCH
app.patch("/user/murli", (req, res) => {
  res.sendStatus(200);
});
//DELETE
app.delete("/user/murli", (req, res) => {
  res.sendStatus(200);
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
