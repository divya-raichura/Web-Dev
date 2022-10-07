const express = require("express");
const app = express();

const { products } = require("../data");
app.set("json spaces", 3);
app.get("/", (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((products) => {
    const { id, name, image } = products;
    return { id, name, image };
  });
  // res.json(products); this sends everything in the products but what if we don't want to send everything and want to be selective? and want to send that extra data only when that specific item is clicked/selected
  res.json(newProducts);
});

// app.get("/api/products/1", (req, res) => {
//   const singleP = products.find((products) => products.id === 1);
//   res.json(singleP);
// });

// if we have thousands of products, we can't do so much cp-cv
// we use route parameters
app.get("/api/products/:productId", (req, res) => {
  // req is object which has params which stores these route parameters
  // so it has productId para stored
  const { productId } = req.params;
  // now is user uses url /api/products/2
  // 2 will be send as productId (it will be string, anything sent by url is string)

  const singleP = products.find(
    (products) => products.id === Number(productId)
  );
  // when it doesn't find the id, it returns undefined and on browser it shows blank as we send singleP which got undefined as that id is not there
  singleP === undefined
    ? res.status(404).send("<h1>product not found</h1>")
    : res.json(singleP);
});

// query strings : values that come after "?" in url
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedPro = [...products];

  // if user provides search query string
  if (search) {
    sortedPro = sortedPro.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  // if user provides limit
  if (limit) {
    sortedPro = sortedPro.slice(0, Number(limit));
  }

  sortedPro.length < 1
    ? res.status(200).send("no products match your search")
    : res.status(200).json(sortedPro);
});

app.listen(5500, () => {
  console.log("server is listening on port 5500");
});
