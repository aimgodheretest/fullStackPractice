const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
let port = 3000;

app.use(express.urlencoded({ extended: false }));

// GET/users -List all users
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// GET/users/1 -List  user with id 1;
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
// POST/users- create a new user;
app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log(body);
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (error, data) => {
    if (error) throw error;
    res.json({ status: "Success" });
  });
});
// PATCH/users/1 - edit user with id 1;
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) return res.json({ msg: "user Not Found!" });

  users[index] = { ...users[index], ...body };

  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (error) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json({ status: "Updated Successfully" });
  });
});
// DELETE/user/id- delete user with id 1;
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (!index) return res.status(404).json({ msg: "User Not Found!" });

  users.splice(index, 1);
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (error) => {
    if (error) return res.status(500).json({ msg: error.message });
    res.json({ message: "User Deleted!" });
  });
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
