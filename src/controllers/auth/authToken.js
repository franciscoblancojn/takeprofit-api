require("module-alias/register");
const jwt = require("jsonwebtoken");
const env = require("@app/env");
const db = require("@app/db");

const index = async (req, res) => {
    try {
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
        if (result.length === 0) {
            throw new Error("User invalid");
        }
        const user = result[0];
        delete user.password;
        const token = jwt.sign(user, env.JWT, { expiresIn: "2h" });

        return res.send({
            type: "ok",
            respond: { token },
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
