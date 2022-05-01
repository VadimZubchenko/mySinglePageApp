const express = require("express");
const app = express();

let database = [];
let id = 100;

let port = process.env.PORT || 3000;

// for using script.js and index.html in public folder
// express.static: built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static("public"));

app.use(express.json());

// GET on server side, for getting data from outside of server
app.get("/api/contact", (req, res) => {
  return res.status(200).json(database);
});
// POST on server side to recieve data into server
app.post("/api/contact", (req, res) => {
  let contact = {
    id: id,
    name: req.body.name,
  };
  id++;
  database.push(contact);
  return res.status(201).json(contact);
});

app.listen(port);
console.log("Server is running on a port:", port);
