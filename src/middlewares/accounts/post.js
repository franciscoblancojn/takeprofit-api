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
        phone: {
            isUndefined: true,
            type: "string",
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
);
