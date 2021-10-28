const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      cinemas: "/cinemas",
    };

    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.cinemas, require("../routes/cinemas"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server run on http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
