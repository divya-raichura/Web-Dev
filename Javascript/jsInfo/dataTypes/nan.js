// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.
// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:

// isNaN(value) converts its argument to a number and then tests it for being NaN:

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

// But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:

// ( NaN === NaN ); // false

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity
// Sometimes isFinite is used to validate whether a string value is a regular number:

let num = +prompt("Enter a number", "");

// will be true unless you enter Infinity, -Infinity or not a number
alert(isFinite(num));

// Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.

// Object.is that compares values like ===
// It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
// Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s true, because internally the number has a sign bit that may be different even if all other bits are zeroes.
// In all other cases, Object.is(a, b) is the same as a === b.
