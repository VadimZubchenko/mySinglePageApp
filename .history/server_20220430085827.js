const express = require("express");
const app = express();

let port = process.env.port || 3000;

app.listen(port);

console.log("Server has been connetcted in port:", port);
