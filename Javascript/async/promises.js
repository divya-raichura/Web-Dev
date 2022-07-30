posts = [
  { title: "one", body: "this is post one" },
  { title: "two", body: "this is post two" },
];

// function getPost() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li> ${post.title}`;
//     });
//     document.body.innerHTML = output;
//   }, 2000);
// }
// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 3000);
// }
// createPost({ title: "three", body: "this is post three" });
// getPost();

// we use callbacks to solve this
let start = new Date().getTime();
function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li> ${post.title}`;
    });
    document.body.innerHTML = output;

    // let end = new Date().getTime();
    // console.log(end - start); // takes 5 secs
  }, 2000);
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;
      if (!err) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 1000);
  });
}

// createPost({ title: "three", body: "this is post three" })
//   .then(getPost)
//   .catch((err) => console.log(err));

// ----------------------------------------
// Promise.all

// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "goodbye");
// });

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (value) => console.log(value.json())
// );

//can't use above, shows pending 
// and 
// log(promise4) will also give pending
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (value) => console.log(value)
// );

/* can't use above shows headers, we need to convert to json and then use it*/
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users")
// .then((value) => value.json())
// .then((value) => console.log(value));


// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );

// --------------------------------------

// elegant way to handle promises
async function init() {
  await createPost({ title: "three", body: "this is post three" });

  getPost();
}
init();

async function initFetch() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();

  data.forEach(() => console.log(data.name));
}
initFetch();
