const fmiddlewares = require("fmiddlewares");

module.exports = [
    fmiddlewares.validateItem(
        {
            _id: {
                type: "text",
            },
        },
        "jwt__"
    ),
];
