require("module-alias/register");
const router = require("express").Router();
const fmiddlewares = require("fmiddlewares");
const {} = require("@app/middlewares/_index");
const controller = require("@app/controllers/acounts/_index");

router.get("/", [], controller.get);
router.post("/", [], controller.post);
router.put("/", [], controller.put);
router.delete("/", [], controller.delete);

module.exports = router;
