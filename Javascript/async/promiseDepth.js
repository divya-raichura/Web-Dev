const users = {
  list: [],
};

const fun = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  // fun3(data);
  return data;
};

const fun2 = async () => {
  const data = await fun();
  // console.log(Array.isArray(data)); // true
  // console.log(Array.isArray(users)); // false
  users.list = data;
  console.log("the user list array : ", users.list);
};

const fun3 = (data) => {
  console.log("this is fun3 function :", data);
};

fun2();
console.log("somehow trying to use return : ");
let val = fun();
console.log("val ", val )
fun3(val);

// we need to put await before calling fun()
// as we are returning data from there

// but if we were calling a function from fun() then we not need to use async await in that called function

// so basically anything outside the async function will have pending for the promise even the val returned from the async function