let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();


// The result is an error.

// The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.