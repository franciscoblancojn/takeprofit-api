const fmiddlewares = require("fmiddlewares");
const db = require("@app/db");

module.exports = [
    fmiddlewares.validateItem({
        exactItems: true,
        monto: {
            type: "number",
        },
        methods: {
            type: "string",
        },
    }),
    async (req, res, next) => {
        try {
            const user_id = req.jwt__._id;
            const _id = req.body.methods;
            const result = await db.get({
                table: "methods",
                query: {
                    _id,
                    user_id,
                },
            });
            if (result.type === "error") {
                throw result;
            }
            if (result.length == 0) {
                throw {
                    error: "methods invalid",
                };
            }
        } catch (error) {
            return res.status(400).send({
                type: "error",
                error,
                msj: `${error}`,
            });
        }
        next();
    },
    async (req, res, next) => {
        try {
            const monto = req.body.monto;
            const _id = req.jwt__._id;
            const result = await db.get({
                table: "accounts",
                query: {
                    _id,
                },
            });
            if (result.type === "error") {
                throw result;
            }
            if (result.length == 0) {
                throw {
                    error: "user invalid",
                };
            }
            const user = result[0];
        } catch (error) {
            return res.status(400).send({
                type: "error",
                error,
                msj: `${error}`,
            });
        }
        next();
    },
];
