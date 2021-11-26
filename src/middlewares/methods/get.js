const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem(
    {
        exactItems: true,
        _id: {
            isUndefined: true,
            type: "string",
        },
        name: {
            isUndefined: true,
            type: "string",
        },
        bank: {
            isUndefined: true,
            type: "string",
        },
        account: {
            isUndefined: true,
            type: "string",
        },
        tipeAccount: {
            isUndefined: true,
            type: "string",
        },
        date: {
            isUndefined: true,
            type: "number",
        },
    },
    "query"
);
