const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem(
    {
        exactItems: true,
        email: {
            type: "email",
        },
        password: {
            type: "text",
        },
    },
);
