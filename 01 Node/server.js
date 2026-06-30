const http = require("http");

let port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200; //ok
  res.setHeader("Content-Type", "text/html");
  res.end(" <h1>Welcome to Node.js</h1>");
});

server.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
