/*
The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.
*/
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

/* In other words, new User(...) does something like:
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
*/

// So let user = new User("Jack") gives the same result as:
// let user = {
//   name: "Jack",
//   isAdmin: false,
// };

// create a function and immediately call it with new
// no reuse
let user2 = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();
// (funtion () {...}) (); is similar to User();

// let user = new User(); // <-- no parentheses
// same as
// let user = new User();

// new.target -> function called without new == undefined and with new == value of function ie function User() {...}
function User5(name) {
  if (!new.target) {
    // if you run me without new
    return new User5(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User5("John"); // redirects call to new User
console.log(john.name); // John

/*

methods in constructor

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

// IMPORTANT
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// IN SHORT
/*
If a function returns an object then new returns it instead of this.
*/

function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- returns this object
}

console.log(new BigUser().name); // Godzilla, got that object

function SmallUser() {
  this.name = "John";

  return; // <-- returns this
}

console.log(new SmallUser().name); // John

// example of func returns object instead of this

let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() == new B()); // true
