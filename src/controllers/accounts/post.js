require("module-alias/register");
const jwt = require("jsonwebtoken");
const env = require("@app/env");
const { encryptPassword } = require("@app/functions/_index");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const body = req.body;

        const user = await db.get({
            table: "accounts",
            query: {
                email: body.email,
            },
        });
        if (user.type === "error") {
            throw user;
        }
        if (user.length !== 0) {
            throw new Error("Use Register");
        }
        body.password = await encryptPassword(body.password);
        const result = await db.post({
            table: "accounts",
            data: {
                ...body,
            },
        });
        const newUser = result.ops[0];
        delete newUser.password;
        const token = jwt.sign(newUser, env.JWT, { expiresIn: "2h" });
        return res.send({
            type: "ok",
            respond: { token },
        });
    } catch (error) {
        console.log(error);
        return res.status(error.code || 500).send({
            type: "error",
            error,
            msj: error.msj || `${error}`,
        });
    }
};
module.exports = index;
