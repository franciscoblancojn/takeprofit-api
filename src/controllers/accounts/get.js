require("module-alias/register");
const {} = require("@app/functions/_index");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const result = await db.get({
            table:"accounts",
            query:req.query,
        })
        return res.send({
            type: "ok",
            respond: result.map((e)=>{
                delete e.password
                return e
            }),
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
