require("module-alias/register");
const router = require("express").Router();
const {apikey,auth,jwt} = require("@app/middlewares/_index");
const controller = require("@app/controllers/auth/_index");

router.post("/", [apikey,auth.auth], controller.auth);
router.post("/verify", [apikey,jwt], controller.verifit);
router.post("/admin", [apikey,auth.auth], controller.admin);

module.exports = router;
