const express = require("express");
const app = express();

const express = require("express/lib/request")
const express = require("express/lib/response")

let port = process.env.PORT || 3000;

// for using script.js and index.html in public folder
// express.static: built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static("public"));

app.get('app/contact' (res,reg){

})

app.listen(port);
console.log("Server is running on a port:", port);
