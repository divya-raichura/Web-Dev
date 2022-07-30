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
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}
createPost({ title: "three", body: "this is post three" }, getPost);
