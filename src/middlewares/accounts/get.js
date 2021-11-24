const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem(
    {
        exactItems: true,
        name: {
            isUndefined: true,
            type: "string",
        },
        last_name: {
            isUndefined: true,
            type: "string",
        },
        email: {
            isUndefined: true,
            type: "email",
        },
        phone: {
            isUndefined: true,
            type: "string",
        },
        date: {
            isUndefined: true,
            type: "number",
        },
        card: {
            isUndefined: true,
            type: "string",
        },
        pais: {
            isUndefined: true,
            type: "string",
        },
        provincia: {
            isUndefined: true,
            type: "string",
        },
        ciudad: {
            isUndefined: true,
            type: "string",
        },
        calle: {
            isUndefined: true,
            type: "string",
        },
    },
    "query"
);
