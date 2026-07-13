const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
let port = 3000;

//middleware implementation
app.use((req, res, next) => {
  console.log(`This is middleware 1`);
  req.myName = "MurliDev";
  next();
});
app.get("/api/users", (req, res) => {
  console.log(req.myName);
  return res.json(users);
});
app.listen(port, () => {
  console.log(`Server is started...`);
});
