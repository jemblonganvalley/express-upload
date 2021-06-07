const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const path = require("path");

const app = express();
const runner = require("./loader/runner");

app.use(cors());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    layoutsDir: path.join(__dirname, "./views/layout"),
    defaultLayout: "layout.html",
    partialsDir: path.join(__dirname, "./views/components"),
    extname: "html",
  })
);

runner(app);
