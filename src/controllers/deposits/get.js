require("module-alias/register");
const { converteFields } = require("@app/functions/_index");
const db = require("@app/db");

const index = async (req, res) => {
    try {
        const query = converteFields(
            [
                {
                    id: "monto",
                    converte: parseFloat,
                },
                {
                    id: "periodo",
                    converte: parseFloat,
                },
                {
                    id: "capital",
                    converte: parseFloat,
                },
                {
                    id: "date",
                    converte: parseFloat,
                },
            ],
            req.query
        );

        const user_id = req.jwt__._id;
        const result = await db.get({
            table: "deposits",
            query: {
                ...query,
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
