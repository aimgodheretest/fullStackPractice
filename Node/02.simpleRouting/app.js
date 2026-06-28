const http = require("http");

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Welcome to home Page</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Welcome to about Page</h1>");
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>Not Found...</h1>");
      }
    }
  } catch (error) {
    throw new error("Method not allowed!");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("Server Started...");
});
