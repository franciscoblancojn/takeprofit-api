require("module-alias/register");
const bcrypt = require("bcrypt");
/**
 * comparePassword
 * @description compara password
 * @param {password}
 * @returns {encript(password)}
 */
const comparePassword = async (password, passwordEncript) => {
    const respond = await bcrypt.compare(password, passwordEncript);
    return respond;
};
module.exports = comparePassword