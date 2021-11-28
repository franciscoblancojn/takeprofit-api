require("module-alias/register");
const {} = require("@app/functions/_index");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const user_id = req.jwt__._id;
        const result = await db.get({
            table: "methods",
            query: {
                ...req.query,
                user_id,
            },
        });
        if(result.type==="error"){
            throw result
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
