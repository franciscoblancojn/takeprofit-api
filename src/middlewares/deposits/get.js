const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem(
    {
        exactItems: true,
        _id: {
            isUndefined: true,
            type: "string",
        },
    },
    "query"
);
