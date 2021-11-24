const fmiddlewares = require("fmiddlewares");

module.exports = fmiddlewares.validateItem(
    {
        exactItems: true,
        email: {
            type: "email",
        },
        password: {
            type: "password",
            regexs:[
                {
                    regex:/^.{8,}$/,
                    msj:"minimum of 8 characters"
                },
                {
                    regex:/[a-z]/,
                    msj:"must contain lowercase letters"
                },
                {
                    regex:/[A-Z]/,
                    msj:"must contain capital letters"
                },
            ]
        },
    },
);
