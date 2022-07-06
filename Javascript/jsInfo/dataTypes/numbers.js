// toString(base)

// The method num.toString(base) returns a string representation of num in the numeral system with the given base.

let num = 255;

console.log(num.toString(16));  // ff
console.log(num.toString(2));   // 11111111

// base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:

console.log((123456).toString(36)); // 2n9c
// same as (123456).toString(36)

// to call method directly on a number we use two dots
// cause one dot tells js that number has decimal part, so two dots tells that decimal part is empty and second dot tells to call the method


// toFixed -> for fixed no of digits after decimal and output is in string type not number
let num2 = 12.34;
console.log(num2.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits

// We can convert it to a number using the unary plus or a Number() call, e.g write +num.toFixed(5).

// Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point (they are zero for integer numbers), and 1 bit is for the sign.

// If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity:

console.log( 1e500 ); // Infinity

console.log( 0.1 + 0.2 == 0.3 ); // false

// it's // 0.30000000000000004
//  Imagine you’re making an e-shopping site and the visitor puts $0.10 and $0.20 goods into their cart. The order total will be $0.30000000000000004. That would surprise anyone.

// division by powers 10 is guaranteed to work well in the decimal system(1/10 = 0.1), but division by 3 is not(1/3 = 0.3333333333...). For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.(0.1 and 0.2)


// There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.

let sum1 = 0.1 + 0.2;
alert( sum1.toFixed(2) ); // "0.30"
// Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point. That’s actually convenient if we have an e-shopping and need to show $0.30. For other cases, we can use the unary plus to coerce it into a number:

let sum2 = 0.1 + 0.2;
alert( +sum2.toFixed(2) ); // 0.3