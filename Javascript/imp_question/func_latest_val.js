let n = "John";

function sayHi() {
  alert("Hi, " + n);
}

n = "Pete";

sayHi(); // what will it show: "John" or "Pete"?


// The answer is: Pete.

// A function gets outer variables as they are now, it uses the most recent values.

// Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.