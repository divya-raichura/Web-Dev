const express = require("express");

const app = express();
app.use(express.json());
const { ObjectId } = require("mongodb");

const { connectToDb, getDb } = require("./db");

// connect db
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => console.log("server listening"));
    db = getDb();
  }
  //   else {
  //     console.log(err);
  //   }
});

// @Routes
// get all
// app.get("/books", (req, res) => {
//   let books = [];

//   db.collection("books")
//     .find()
//     .sort({ author: 1 })
//     .forEach((book) => books.push(book))
//     .then(() => {
//       res.status(200).json(books);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "Could not fetch the documents" });
//     });
// });

// get all with query
app.get("/books", (req, res) => {
  // current page
  const page = req.query.p || 0;
  const booksPerPage = 3;

  let books = [];

  db.collection("books")
    .find()
    .sort({ author: 1 })
    .skip(page * booksPerPage)
    .limit(booksPerPage)
    .forEach((book) => books.push(book))
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});

// get one
app.get("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not fetch the document" });
      });
  } else {
    res.status(500).json({ error: "Could not fetch the document" });
  }
});

// post
app.post("/books", (req, res) => {
  const book = req.body;

  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create new document" });
    });
});

// delete
app.delete("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not delete document" });
      });
  } else {
    res.status(500).json({ error: "Could not delete document" });
  }
});

app.patch("/books/:id", (req, res) => {
  const updates = req.body;

  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not update document" });
      });
  } else {
    res.status(500).json({ error: "Could not update document" });
  }
});
