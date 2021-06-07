const express = require("express");
const run = express();
const page = require("../router/page_router");
const upload = require("../router/upload_router");

const runner = (app) => {
  //P A G E
  app.use("/", page);

  // A P I
  app.use("/api", upload);

  app.listen(8000, () => {
    console.log("listen port 8000");
  });
};

module.exports = runner;
