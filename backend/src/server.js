const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();

mongoose.connect(
  "mongodb+srv://twitter:twitterinfo@cluster0-f8bce.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
