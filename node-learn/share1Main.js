// const thisSaysHi = require("./share2");

// thisSaysHi("divya");
// console.log(module);
// console.log(thisSaysHi);

// require("./share2");
const res = require("./share2");
res("Divya");
// console.log(res);

// 2nd part shows that just doing require() runs the methods that are called in the required file even if we didn't call it in this file
// even if - we did not declare variable for require()

/* SO AN IMPORTANT POINT HERE IS THAT : when you import a module you invoke it, so if there is a function call in the imported module, require() will run it*/
