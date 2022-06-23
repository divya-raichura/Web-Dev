const power = function (base, exponent) {
  let result = 1;
  for (let index = 0; index < exponent; index++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 5));
power(2, 5);
const makeNoise = function () {
  console.log("hello");
};

makeNoise();

console.log(makeNoise);
console.log(power);

const usingVar = function () {
  var helo = "hellowww";
  console.log(helo);
};
usingVar()
console.log(usingVar());
// nope
// console.log(helo); 
for (var index = 0; index < 5; index++) {
    console.log(index);
}
// yes!
console.log(index);

const hummus = function (factor) {
  console.log(factor);
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

// The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

const a = 99;
let b = a;
console.log(b);
b += 24;
console.log(b);


// A function binding usually simply acts as a name for a specific piece of the program. Such a binding is defined once and never changed. This makes it easy to confuse the function and its name.

// But the two are different. A function value can do all the things that other values can do—you can use it in arbitrary expressions, not just call it. It is possible to store a function value in a new binding, pass it as an argument to a function, and so on. Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:

let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}