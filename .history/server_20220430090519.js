const express = require("express");
const app = express();

let port = process.env.port || 3000;

app.listen(port);

console.log("Server is running on a port:", port);

// the next part for using script.js and index.html in public folder
