const express = require("express")
const app = express()
const path = require('path');

// use the express-static middleware
app.use(express.static("projects"))

// define the first route
app.get("/", function (req, res) {
  res.render("index.html")
})



// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));