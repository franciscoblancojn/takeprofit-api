const fmiddlewares = require("fmiddlewares");

module.exports = [
    fmiddlewares.validateItem({
        exactItems: true,
        periodo: {
            type: "number",
        },
        capital: {
            type: "number",
        },
        monto: {
            type: "number",
        },
        account: {
            type: "string",
        },
    }),
];
