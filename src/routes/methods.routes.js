require("module-alias/register");
const router = require("express").Router();
const {apikey,jwt,methods} = require("@app/middlewares/_index");
const controller = require("@app/controllers/methods/_index");

router.get("/", [apikey,jwt,methods.get], controller.get);
router.post("/", [apikey,jwt,methods.post], controller.post);
router.put("/", [apikey],jwt,methods.put, controller.put);
router.delete("/", [apikey], controller.delete);

module.exports = router;
