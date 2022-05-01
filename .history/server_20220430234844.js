const express = require("express");
const app = express();

const express = require("express/lib/request")
const express = require("express/lib/response")

let database[];


let port = process.env.PORT || 3000;

// for using script.js and index.html in public folder
// express.static: built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static("public"));

app.get('/app/contact' = (res,reg) => {
  return res.status(200).json(database)
})
app.post('/app/contact' = (res, reg)=>{
  let contact = {
    id: reg.body.id,   
    name: reg.body.name
  }
  id++
  database.push[contact]
})


app.listen(port);
console.log("Server is running on a port:", port);
