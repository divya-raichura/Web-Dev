// let age = prompt("what is your age? ", 18);
// alert("your age is ", age); // can't do this, two parameters possible only for prompt
// alert(`your age is ${age}`);

// let isStudent = confirm("are you student");
// alert(isStudent);

// multiple ops using
// let age = prompt("age?", 18);

// let message =
//   age < 3
//     ? "Hi, baby!"
//     : age < 18
//     ? "Hello!"
//     : age < 100
//     ? "Greetings!"
//     : "What an unusual age!";

// alert(message);

console.log("this is a function");

let a = "john";
console.log(a);

fun(a);
console.log(a);

function fun(x) {
  console.log(x);
  x = "bob";
  console.log(x);
}
const fun2 = function(x){
    console.log(x);
}
fun2(20);


// arrow functions
let ask = (question, yes, no) => {
    let confirmation = confirm(question)?yes():no();
}

ask( "Do you agree?",
  () => alert("You agreed.") ,
  () =>  alert("You canceled the execution."))

  {
    let f_name  = 'Alex';
    const ZIP = 500067;
    var age = 25;
}

let age = 18;

console.log(age);  // 25
console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined