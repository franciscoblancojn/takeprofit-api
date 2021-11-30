require("module-alias/register");
const jwt = require("jsonwebtoken");
const env = require("@app/env")
const {} = require("@app/functions/_index");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const body = req.body
        const _id = req.jwt__._id

        const result = await db.put({
            table: "accounts",
            where:{_id},
            data:{
                $set:body
            }
        })
        if(result.type==="error"){
            throw result
        }
        const respond = await db.get({
            table:"accounts",
            query:{_id},
        })
        const user = respond[0]
        delete user.password
        const token = jwt.sign(user, env.JWT,{ expiresIn: '2h' })

        return res.send({
            type: "ok",
            token,
            msj:"User Update Ok",
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
