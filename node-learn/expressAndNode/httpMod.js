const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is home page");
  } else if (req.url === "/about") {
    res.end("this is about page");
  } else {
    res.end(
      `
        <h1>oops!</h1>
        <p>did not found the page you are looking for</p>
        <a href="/">go back</a>
    `
    );
  }
});

server.listen(5500);
