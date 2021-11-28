require("module-alias/register");
const {} = require("@app/functions/_index");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const _id = req.jwt__._id
        const result = await db.delete({
            table:"accounts",
            where:{
                _id
            }
        })
        if(result.type==="error"){
            throw result
        }
        return res.send({
            type: "ok",
            respond: "User Delete",
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
