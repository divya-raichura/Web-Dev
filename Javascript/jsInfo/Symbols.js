let a = "divya";
let b = "divya";
console.log(a == b); // true

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false

//  a symbol is a “primitive unique value” with an optional description.
// alert(id); // TypeError: Cannot convert a Symbol value to a string, to print do
// alert(id.toString()); // Symbol(id), now it works
// alert(id.description); // id

let user = {
  // belongs to another code
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]); // we can access the data using the symbol as the key

// advantage of doing like this is because we know that symbols can't be accessed so
// if we add like this, it will not break functionality of some another code in another file using this object

// Also, imagine that another script wants to have its own identifier inside user, for its own purposes.

// Then that script can create its own Symbol("id"), like this:
// ...
let idAnother = Symbol("id");

user[idAnother] = "Their id value";

// There will be no conflict between our and their identifiers, because symbols are always different, even if they have the same name.
// …But if we used a string "id" instead of a symbol for the same purpose, then there would be a conflict:

let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value";
// Boom! overwritten by another script!

// Symbols are skipped by for…in
// Symbolic properties do not participate in for..in loop.
// Object.keys(obj) also ignores them
// clone(Object.assign()) does NOT ignore

// read from the global registry
let idGlobal = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idGlobalAgain = Symbol.for("id");

// the same symbol
console.log(idGlobal === idGlobalAgain); // true

// ----------------------------------------//

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.

// ----------------------------------------//
