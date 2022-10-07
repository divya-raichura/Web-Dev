const express = require("express");
const app = express();

let { people } = require("../data");

app.use(express.static("./public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});

app.listen(5500, () => {
  console.log("server listening on port 5500...");
});
