const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>welcome to our home page</h1>");
});

server.listen(5500);
