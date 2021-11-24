require("module-alias/register");
const router = require("express").Router();
const fmiddlewares = require("fmiddlewares");
const {apikey} = require("@app/middlewares/_index");
const controller = require("@app/controllers/auth/_index");

router.post("/", [apikey], controller.auth);

module.exports = router;
