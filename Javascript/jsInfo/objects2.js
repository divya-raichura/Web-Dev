// Actions are represented in JavaScript by functions in properties.
"use strict";
let user = {
  name: "John",
  age: 30,
  sayHi: function () {
    console.log(this.age);
    console.log("HI");
  },
  /*  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  } */
};
user.sayHello = function () {
  console.log("HELLO");
};
// A function that is a property of an object is called its method.
function namaste() {
  console.log("NAMASTE");
}
user.sayNamaste = namaste;

// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

let user2 = { name: "John" };
let admin2 = { name: "Admin" };

function sayHi2() {
  console.log(this.name);
}

// use the same function in two objects
user2.f = sayHi2;
admin2.f = sayHi2;

// these calls have different this
// "this" inside the function is the object "before the dot"
user2.f(); // John  (this == user)
admin2.f(); // Admin  (this == admin)

admin2["f"](); // Admin (dot or square brackets access the method – doesn't matter)

function sayHi3() {
  console.log(this); // different behaviour in strict and non strict modes
}

sayHi3(); // undefined
user2.sayHi3 = sayHi3;

let user5 = {
  firstName: "Ilya",
  age: 25,
  sayHi5() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user5.sayHi5(); // Ilya

function forTry() {
  console.log(this);
}
user5.forTry = forTry;
// IMPORTANT NOTE
// if we write this inside function, then its value is undefined(in strict mode) when we console log this, when we console log this.age it does undefined.age which is error but if this function is a method, that is, inside object or assigned to a property then all this works as per object

// amazin eg
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user6 = makeUser();

console.log(user6.ref.name); // Error: Cannot read property 'name' of undefined
// Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.

// above is same as
/*
function makeUser(){
  return this; // this time there's no object literal
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
*/

// // correct version
// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// alert(user.ref().name); // John

// amazing question

// https://stackoverflow.com/questions/56764522/why-cant-i-access-properties-directly-within-this-object
