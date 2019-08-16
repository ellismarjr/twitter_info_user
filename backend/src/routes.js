const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

// Rotas
routes.post("/user", UserController.store);
routes.get("/listUsers", UserController.index);

module.exports = routes;
