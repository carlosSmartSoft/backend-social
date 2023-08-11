const express = require("express");
const auth = require("./auth");
// Route Principal
const routerMain = express.Router();

// Route Children

routerMain.use("/api/v1/auth", auth);

module.exports = routerMain;
