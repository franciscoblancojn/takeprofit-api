const fmiddlewares = require("fmiddlewares");
const db = require("@app/db");

module.exports = [
    fmiddlewares.validateItem({
        exactItems: true,
        periodo: {
            type: "number",
        },
        capital: {
            type: "number",
        },
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
                table: "retreats",
                query: {
                    _id,
                    user_id,
                },
            });
            if (!result) {
                throw {
                    error: "methods invalid",
                };
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
];
