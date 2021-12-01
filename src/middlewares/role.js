require("module-alias/register");

const role = (rol) => async (req, res, next) => {
    if (req.jwt__.role !== rol) {
        return res.status(400).send({
            type: "error",
            error,
            msj: `User invalid`,
        });
    }
    next();
};

module.exports = role;
