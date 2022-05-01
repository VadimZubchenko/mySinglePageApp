const express = require("express");
const app = express();

let port = process.env.port || 3000;

app.listen(port);

console.log("Server is running on a port:", port);

// for using script.js and index.html in public folder
// express.static: built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static("public"));
