const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      cinemas:  "/cinemas",
      elastic:  "/elastic"
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.cinemas,  require("../routes/cinemas"));
    this.app.use(this.paths.elastic,  require("../routes/elastic"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server run on http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
