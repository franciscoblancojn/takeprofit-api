module.exports = {
    apikey : require("@app/middlewares/apikey"),
    jwt : require("@app/middlewares/jwt"),
    accounts : require("@app/middlewares/accounts/_index"),
    auth : require("@app/middlewares/auth/_index"),
}