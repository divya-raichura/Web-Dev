// mix of values
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

// get the object at index 1 and then show its name
alert(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

// ------------------------------

let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[fruits.length - 1]); // Plum

alert(fruits.at(-1)); // Plum
// same as arr[-1] but arr[-1] doesn't work, this works...

// ------------------------------

// Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.

alert(fruits.shift()); // remove Apple and alert it

// pop does same but from end

// unshift -> add to beginning
// push -> add to end

// Methods push and unshift can add multiple elements at once

// ------------------------------

// arrays are a type of obj
// But what makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area, one after another
// But they all break if we quit working with an array as with an “ordered collection” and start working with it as if it were a regular object.

let fruit = []; // make an array

fruit[99999] = 5; // assign a property with the index far greater than its length

fruit.age = 25; // create a property with an arbitrary name
// That’s possible, because arrays are objects at their base. We can add any properties to them.

// The ways to misuse an array:

// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.

// -----------------------------

// Methods push/pop run fast, while shift/unshift are slow.

// The for..of doesn’t give access to the number of the current element, just its value

// best to use for...of
for (let fruit of fruits) {
  alert(fruit);
}

for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

// we should not use for...in, reason -> see in docs
for (let key in arr) {
  alert(arr[key]); // Apple, Orange, Pear
}

// -----------------------------

// .length property not the count of no of values in arr
// it is the greatest numeric index plus one.
fruits[123] = "Apple";
alert(fruits.length); // 124

// we (shud not)don't use array like that

// Another interesting thing about the length property is that it’s writable.

// If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:

let arr2 = [1, 2, 3, 4, 5];

arr2.length = 2; // truncate to 2 elements
alert(arr2); // [1, 2]

arr2.length = 5; // return length back
alert(arr2[3]); // undefined: the values do not return

// So, the simplest way to clear the array is: arr.length = 0;.

// -----------------------------

alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"
// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

// When the binary plus "+" operator adds something to a string, it converts it to a string as well


// -----------------------------

//  C O N V E R S I O N S

// + operator has no special treatment for arrays, it works with them as with any objects.

// Let’s recall the rules:

// Two objects are equal == only if they’re references to the same object.
// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
// …With an exception of null and undefined that equal == each other and nothing else.

//  if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

alert( [] == [] ); // false
alert( [0] == [0] ); // false
// These arrays are technically different objects. So they aren’t equal. The == operator doesn’t do item-by-item comparison.

alert( 0 == [] ); // true

alert('0' == [] ); // false

// Here, in both cases, we compare a primitive with an array object. So the array [] gets converted to primitive for the purpose of comparison and becomes an empty string ''.

// SO  wkt 0 != '0' and '' == 0
// hence,  0 == '' and'0' == '' 

// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings