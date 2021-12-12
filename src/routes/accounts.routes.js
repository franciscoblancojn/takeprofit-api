require("module-alias/register");
const router = require("express").Router();
const { apikey, accounts, jwt, role } = require("@app/middlewares/_index");
const controller = require("@app/controllers/accounts/_index");

router.get("/", [apikey, jwt, role("admin"), accounts.get], controller.get);
router.post("/", [apikey, accounts.post, jwt, role("admin")], controller.post);
router.put("/", [apikey, jwt, ...accounts.put], controller.put);
router.delete("/", [apikey, jwt, accounts.delete], controller.delete);

module.exports = router;
