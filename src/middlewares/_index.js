module.exports = {
    apikey : require("@app/middlewares/apikey"),
    jwt : require("@app/middlewares/jwt"),
    accounts : require("@app/middlewares/accounts/_index"),
    auth : require("@app/middlewares/auth/_index"),
    deposits : require("@app/middlewares/deposits/_index"),
    retreats : require("@app/middlewares/retreats/_index"),
}