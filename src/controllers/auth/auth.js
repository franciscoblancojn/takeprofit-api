require("module-alias/register");
const {} = require("@app/functions/_index");
const jwt = require("jsonwebtoken");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const body = req.body;
        const result = await db.get({
            table: "accounts",
            query:{
                email: body.email,
            },
        });
        if (result.length === 0) {
            throw new Error("Email o Password invalid");
        }
        const user = result[0];
        return res.send({
            type: "ok",
            respond: {},
        });
    } catch (error) {
        return res.status(error.code || 500).send({
            type: "error",
            error,
            msj: error.msj || `${error}`,
        });
    }
};
module.exports = index;
