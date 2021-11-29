require("module-alias/register");
const bcrypt = require('bcrypt')
const env = require("@app/env")
/**
 * encryptPassword
 * @description encripta password
 * @param {password}
 * @returns {encript(password)}
 */
const encryptPassword = async (password) => {
    const respond = await bcrypt.hash(password, parseInt(env.SALT));
    return respond;
};
module.exports = encryptPassword;
