const dotenv = require("dotenv").config();
const env = dotenv.parsed;
console.log(dotenv);

console.log(env);

module.exports = process.env;
