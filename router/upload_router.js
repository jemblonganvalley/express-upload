const express = require("express");
const upl = require("../loader/multer");
const { createFile } = require("../model/Upload_model");
const upload = express.Router();

upload.post("/upload", upl.single("photos"), (req, res) => {
  const data = req.body;
  const file = req.file;

  createFile({
    filename: file.filename,
    url: `assets/images/${file.filename}`,
  })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});

module.exports = upload;
