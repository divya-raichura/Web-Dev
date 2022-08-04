const path = require("path");

// console.log(path.sep);

const filepath = path.join("/content/", "subfolder", "test.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

// following gives absolute path to given filenames
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
