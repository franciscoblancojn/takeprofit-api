const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem(
    {
        exactItems: true,
        _id: {
            isUndefined: true,
            type: "string",
        },
        periodo: {
            isUndefined: true,
            type: "string",
        },
        capital: {
            isUndefined: true,
            type: "string",
        },
        monto: {
            isUndefined: true,
            type: "string",
        },
        date: {
            isUndefined: true,
            type: "string",
        },
    },
    "query"
);
