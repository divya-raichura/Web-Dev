// -ve indexes are allowed

// SPLICE NO NEW ARRAY ----------------------------------------------------

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
// means starting from 0 remove 3 elements and replace them
alert(arr); // now ["Let's", "dance", "right", "now"]

let arr2 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr2.splice(2, 0, "complex", "language");

alert(arr2); // "I", "study", "complex", "language", "JavaScript"

// ---------------------------

// SLICE CREATES NEW ARR ----------------------------------------------------

let arr3 = ["t", "e", "s", "t"];

alert(arr3.slice(1, 3)); // e,s (copy from 1 to 3)

alert(arr3.slice(-2)); // s,t (copy from -2 till the end)
// We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

// ----------------------------

// CONCAT CREATES NEW ARR ----------------------------------------------------

let arr4 = [1, 2];
alert(arr4.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

let arr5 = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  //   WITHOUT THIS: 1,2,[object Object]
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

alert(arr5.concat(arrayLike)); // 1,2,something,else

// ------------------

// FOR EACH ----------------------------------------------------

// The arr.forEach method allows to run a function for every element of the array.

arr.forEach(function (item, index, array) {
  // ... do something with item
});

["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["DIVYA", "KUNAL", "ELON"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

// --------------------------

// includes, indexof ----------------------------------------------------

let arr11 = [1, 0, false];
alert(arr11.indexOf(null)); // -1

alert(arr11.includes(1)); // true

// includes checks nan but indexof doesn't
alert(arr.indexOf(NaN)); // -1 (wrong, should be 0)
alert(arr.includes(NaN)); // true (correct)

// --------------------------

// find ----------------------------------------------------

let result = arr.find(function (item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

// The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

let users = [
  { id: 1, name: "kk" },
  { id: 2, name: "dr" },
  { id: 3, name: "em" },
];

let user = users.find((item) => item.id == 1);

// ------------------

// filter ----------------------------------------------------

// The syntax is similar to find, but filter returns an array of all matching elements:

let users2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users2.filter((item) => item.id < 3);

alert(someUsers.length); // 2

//  ----------------------------------------------------

// MAP

// .forEach() operates on original array and .map() on the new one.
// https://stackoverflow.com/questions/3034392/what-use-does-the-javascript-foreach-method-have-that-map-cant-do

let array = ["Bilbo", "Gandalf", "Nazgul"];

let lengths = array.map((item) => item.length);
alert(lengths); // 5,7,6

// -------------------------------------------------------------------------------------------------

// SORT

let arr100 = [1, 2, 15];

// the method reorders the content of arr
arr100.sort();

alert(arr100); // 1, 15, 2

// Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".

// see docs https://javascript.info/array-methods#add-remove-items

// -------------------------------------------------------------------------------------------------

// reverse og

let arr12 = [1, 2, 3, 4, 5];
arr12.reverse();

alert(arr12); // 5,4,3,2,1
// It also returns the array arr after the reversal.

// -------------------------------------------------------------------------------------------------

// split

let names = "Bilbo, Gandalf, Nazgul";

let arr111 = names.split(", ");

for (let name of arr111) {
  alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

// The call to split(s) with an empty s would split the string into an array of letters:

let str2 = "test";

alert(str2.split("")); // t,e,s,t

// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

// For instance:

let arr7 = ["Bilbo", "Gandalf", "Nazgul"];

let str = arr7.join(";"); // glue the array into a string using ;

alert(str); // Bilbo;Gandalf;Nazgul

// -------------------------------------------------------------------------------------------------

// https://javascript.info/array-methods#summary
