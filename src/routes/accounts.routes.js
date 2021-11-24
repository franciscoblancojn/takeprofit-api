require("module-alias/register");
const router = require("express").Router();
const fmiddlewares = require("fmiddlewares");
const { apikey,accounts } = require("@app/middlewares/_index");
const controller = require("@app/controllers/accounts/_index");

router.get(
    "/",
    [
        apikey,
        accounts.get
    ],
    controller.get
);
router.post("/", [apikey], controller.post);
router.put("/", [apikey], controller.put);
router.delete("/", [apikey], controller.delete);

module.exports = router;
