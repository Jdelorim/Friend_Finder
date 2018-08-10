var surveyData = require("../data/friends");

module.exports = (app) => {
    app.get("/api/survey", (req,res) => {
        res.json(friendsData);
    })
}