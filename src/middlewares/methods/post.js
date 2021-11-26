const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem({
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
    tipeAccount: {
        type: "string",
    },
});
