const fmiddlewares = require("fmiddlewares");

module.exports = [
    fmiddlewares.validateItem(
        {
            _id: {
                type: "text",
            },
        },
        "query"
    ),
    fmiddlewares.validateItem({
        exactItems: true,
        name: {
            type: "string",
        },
        bank: {
            type: "string",
        },
        account: {
            type: "string",
        },
        typeAccount: {
            type: "string",
        },
    }),
];
