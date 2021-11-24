require("module-alias/register");
const router = require("express").Router();
const fmiddlewares = require("fmiddlewares");
const { apikey } = require("@app/middlewares/_index");
const controller = require("@app/controllers/accounts/_index");

router.get(
    "/",
    [
        apikey,
        fmiddlewares.validateItem(
            {
                exactItems: true,
                name: {
                    isUndefined: true,
                    type: "string",
                },
                last_name: {
                    isUndefined: true,
                    type: "string",
                },
                email: {
                    isUndefined: true,
                    type: "email",
                },
                phone: {
                    isUndefined: true,
                    type: "string",
                },
                card: {
                    isUndefined: true,
                    type: "string",
                },
                pais: {
                    isUndefined: true,
                    type: "string",
                },
                provincia: {
                    isUndefined: true,
                    type: "string",
                },
                ciudad: {
                    isUndefined: true,
                    type: "string",
                },
                calle: {
                    isUndefined: true,
                    type: "string",
                },
            },
            "query"
        ),
    ],
    controller.get
);
router.post("/", [apikey], controller.post);
router.put("/", [apikey], controller.put);
router.delete("/", [apikey], controller.delete);

module.exports = router;
