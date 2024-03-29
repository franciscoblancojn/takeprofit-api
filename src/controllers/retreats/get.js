require("module-alias/register");
const {} = require("@app/functions/_index");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const user_id = req.jwt__._id;
        var query = {
            ...req.query,
            user_id,
        };

        if (req.jwt__.role === "admin") {
            query = {
                ...req.query,
            };
        }

        const result = await db.get({
            table: "retreats",
            query,
        });
        if (result.type === "error") {
            throw result;
        }
        return res.send({
            type: "ok",
            respond: result,
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
