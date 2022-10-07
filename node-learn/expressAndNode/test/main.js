const { sayHi } = require("./one");

sayHi("xyz"); // hi xyz!!

const obj = {
  name: "elon",
  age: 20,
};

const { name } = obj;

console.log(name); // elon
console.log({ name }); // { name: 'elon' }

const surname = "raichura";
console.log(surname); // raichura
console.log({ surname }); // { surname: 'raichura' }

const newObj = {
  s_name: "musk",
  task: "reach mars",
};

// const { s_name: s } = obj;
// console.log(s);
console.log({ s_name: newObj.s_name }); // { s_name: 'musk' }
