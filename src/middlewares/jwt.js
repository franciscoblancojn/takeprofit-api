require("module-alias/register");
const jwt = require("jsonwebtoken");
const env = require("@app/env")

const validateJWT = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            throw new Error("Token invalid");
        }
        const token = auth.split(" ").pop();
        const result = jwt.verify(token, env.JWT);
        req.jwt__ = result;
        if (!result._id) {
            throw new Error("Token invalid");
        }
    } catch (error) {
        return res.status(400).send({
            type: "error",
            error,
            msj: `${error}`,
        });
    }
    next();
};

module.exports = validateJWT;
