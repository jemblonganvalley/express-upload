const db = require("../loader/connection");

class Upload {
  async createFile(data) {
    return await db("files")
      .insert(data)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async readFile() {
    return await db("files")
      .select("*")
      .orderBy("id", "desc")
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}

module.exports = new Upload();
