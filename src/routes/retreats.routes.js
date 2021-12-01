require("module-alias/register");
const router = require("express").Router();
const { apikey, jwt, retreats, role } = require("@app/middlewares/_index");
const controller = require("@app/controllers/retreats/_index");

router.get("/", [apikey, jwt, retreats.get], controller.get);
router.get("/admin", [apikey, jwt, role("admin")], controller.get);
router.post("/", [apikey, jwt, retreats.post], controller.post);
router.put("/", [apikey], controller.put);
router.delete("/", [apikey], controller.delete);

module.exports = router;
