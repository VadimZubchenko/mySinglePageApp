const express = require("express");
const app = express();

let port = process.env.port || 3000;

app.listen(port);

console.log("The server is running on a port:", port);
