require("module-alias/register");
const router = require("express").Router();
const {apikey,jwt,retreats} = require("@app/middlewares/_index");
const controller = require("@app/controllers/retreats/_index");

router.get("/", [apikey,jwt,retreats.get], controller.get);
router.post("/", [apikey], controller.post);
router.put("/", [apikey], controller.put);
router.delete("/", [apikey], controller.delete);

module.exports = router;
