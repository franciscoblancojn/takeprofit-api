require("module-alias/register");
const router = require("express").Router();
const {apikey,jwt,deposits} = require("@app/middlewares/_index");
const controller = require("@app/controllers/deposits/_index");

router.get("/", [apikey,jwt,deposits.get], controller.get);
router.post("/", [apikey,jwt,deposits.post], controller.post);
router.put("/", [apikey], controller.put);
router.delete("/", [apikey], controller.delete);

module.exports = router;
