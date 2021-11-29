const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem({
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
        type: "object",
        items: {
            exactItems: true,
            bank: {
                type: "string",
            },
            name: {
                type: "string",
            },
            account: {
                type: "string",
            },
            type: {
                type: "string",
            },
        },
    },
});
