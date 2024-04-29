const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = require("./Routes/index");
const cors = require('cors');

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(cors());
server.use((req, res, next) => {
  //* update to match all domains you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", router);

//! Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error("este es el mensaje de error", err.message);
  res.status(status).send(message);
});

module.exports = server;
