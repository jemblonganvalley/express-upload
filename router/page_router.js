const express = require("express");
const { readFile } = require("../model/Upload_model");
const page = express.Router();

page.get("/", (req, res) => {
  readFile()
    .then((result) => {
      res.render("main", {
        title: "home",
        data: result,
      });
    })
    .catch((err) => {
      res.render("main", {
        title: "error",
        data: err,
      });
    });
});

page.get("/upload", (req, res) => {
  res.render("upload", {
    title: "upload form",
  });
});

module.exports = page;
