const express = require("express");
const app = express();

const one = app.get("/", (request, response) => {
  response.send("Home Page");
});

const two = app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3000);
module.exports = one;
module.exports = two;
