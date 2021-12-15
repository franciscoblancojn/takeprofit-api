const fmiddlewares = require("fmiddlewares");
const env = require("@app/env");
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
            const dataUser = {};
            const user = result[0];
            const now = new Date().getTime();
            const laftRetreatsDate = user.laftRetreatsDate || now;
            const datePermitedStart =
                laftRetreatsDate +
                parseFloat(env.DIASRETIROS || 40) * 24 * 60 * 60 * 1000;
            const datePermitedEnd =
                datePermitedStart +
                parseFloat(env.DIASPERMITED || 40) * 24 * 60 * 60 * 1000;
            if (
                (now < datePermitedStart || now > datePermitedEnd) &&
                user.laftRetreatsDate == null
            ) {
                throw {
                    error: "Date not permited",
                };
            }
            dataUser.laftRetreatsDate = now;

            const montoMax = (user.capital * user.porRetiro) / 100;
            const capital = user.capital;
            if (capital === 0) {
                throw {
                    error: "No hay capital",
                };
            }

            const montoUse = Math.min(monto, montoMax);

            req.body.monto = montoUse;

            const newCapital = capital + (montoMax - montoUse);

            if (newCapital != capital) {
                dataUser.capital = newCapital;
            }
            const resultA = await db.put({
                table: "accounts",
                where: { _id },
                data: {
                    $set: {
                        ...dataUser,
                    },
                },
            });
            if (resultA.type === "error") {
                throw result;
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
