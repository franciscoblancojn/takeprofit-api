const dotenv = require("dotenv").config();
const env = dotenv.parsed;

console.log(env);

module.exports = env;
