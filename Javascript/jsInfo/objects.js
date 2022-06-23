// function hello(name) {
//   let phrase = "hello, " + name;
//   say(phrase);
// }

// function say(phrase) {
//   console.log(phrase);
//   alert(sum(5, 9));
// }

// let sum = (a, b) => {
//   alert("inside sum");
//   console.log("this is sum log");
//   ans = a + b;
//   return ans;
// };

// hello("elon");

let user = {
  specie: "Human",
  //   if we need multiword key we need to use quotes
  "likes humanity": true,
  1: "one", // same as "1" : "one"
};
user.name = "Elon";
user.age = 50;

alert(user[1]);
alert(user["1"]);

// set
user["which coin"] = "dogecoin";
// get
console.log(user["which coin"]);
// delete
delete user["which coin"];

// computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

// better
let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};

// take property name from the fruit variable -> note: bag2["fruit2"] will create fruit2:value
// but bag2[fruit2] means take key as value of fruit2 variable
bag2[fruit2] = 5;

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };

  /* more better
function makeUser(name, age) {
  return {
    name, // same as name: name
    age: 40,  // same as age: age
    // ...
  };
}
*/
}

let user2 = makeUser("John", 30);
alert(user2.name); // John

let user3 = { name: "John", age: 30 };
alert(user3.noSuchProperty === undefined); // true means "no such property"
alert("age" in user3); // true, user.age exists
alert("blabla" in user3); // false, user.blabla doesn't exist

// note that lhs inside in should be quoted cause without quotes has diff usage as follows
/*
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists
*/

//  why to use 'in' if we can check by comaparing undefined
let obj = {
  test: undefined,
};

alert(obj.test); // it's undefined, so - no such property?

alert("test" in obj); // true, the property does exist!

// integer properties -> can be converted string <-> integers back and forth

let codes = {
  "+91": "India",
  "+21": "Germany",
  "+12": "USA",
};
// they are numbers so they will be ordered
for (let code in codes) {
  console.log(+code); // note that we add + here also to convert string to integer so "+91" => 91 else
  // it will print string "+91"
  console.log(codes);
}
// for all other values the order will be according to which was created first even for floats
// what if we want same for numbers? we will just add '+' in front of all
// eg "+91" : India
