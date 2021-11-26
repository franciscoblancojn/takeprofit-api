require("module-alias/register");
const router = require("express").Router();
const {apikey,auth,jwt} = require("@app/middlewares/_index");
const controller = require("@app/controllers/auth/_index");

router.post("/", [apikey,auth.auth], controller.auth);
router.post("/verifit", [apikey,jwt], controller.auth);

module.exports = router;
