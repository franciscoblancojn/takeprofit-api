require("module-alias/register");
const router = require("express").Router();
const { apikey, auth, jwt, role } = require("@app/middlewares/_index");
const controller = require("@app/controllers/auth/_index");

router.post("/", [apikey, auth.auth], controller.auth);
router.post("/verify/admin", [apikey, jwt, role("admin")], controller.verifit);
router.post("/verify", [apikey, jwt], controller.verifit);
router.post("/admin", [apikey, auth.auth], controller.admin);
router.post("/token", [apikey, jwt], controller.authToken);

module.exports = router;
