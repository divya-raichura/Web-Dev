const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/test.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      "result of async",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result); // undefined as we are not expecting
      }
    );
  });
});
