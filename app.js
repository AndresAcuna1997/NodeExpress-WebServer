require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

//HandleBars

app.get("/", function (req, res) {
  res.render("home", { name: "Learning node", title: "Node Course" });
});

app.get("/generic", function (req, res) {
  res.render("generic", { name: "Learning node", title: "Node Course" });
});

app.get("/elements", function (req, res) {
  res.render("elements", { name: "Learning node", title: "Node Course" });
});

//Serve STATIC content

/* app.get("/generic", function (req, res) {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", function (req, res) {
  res.sendFile(__dirname + "/public/elements.html");
}); */

app.get("*", function (req, res) {
  res.send("404 | Page not found");
});

console.log(port);
app.listen(port);
