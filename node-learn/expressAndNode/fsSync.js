// sync means blocking

const { readFileSync, writeFileSync } = require("fs");

//  readFileSync, writeFileSync are methods
const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);

writeFileSync("./content/result-sync.txt", "this is the text");
writeFileSync("./content/result-sync.txt", "this is the text", { flag: "a" }); // to append
