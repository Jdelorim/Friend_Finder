var surveyData = require("../app/data/friends");

module.exports = (app) => {
    app.get("/api/survey", (req,res) => {
        res.json(surveyData);
    })
    app.post("/api/friends", (req,res) => {
        var bestMatch={
            name:'James Campfield',
            photo:'https://c1.staticflickr.com/8/7631/16506404064_a78b3db185_b.jpg',
            points:100000000
            }
       //console.log("USER DATA FROM FRON: ", req.body)
        var user ={
            name:req.body.name,
            photo:req.body.photo,
            scores:req.body.scores
        }
        var totDiff = 0;
        for(var i=0;i<surveyData.length;i++){
            for(var j=0;j<surveyData.scores;j++){
            var currentScore = user.scores[j];
            var friendsScore = surveyData.scores[j];
             totDiff += (Math.abs(parseInt(currentScore))) - (Math.abs(parseInt(friendsScore)));
             console.log(totDiff);
        }
                // use iF statement to check if totoalDiff is less then bestMatch.points
                if(totDiff < parseInt(bestMatch.points)){
                    console.log("set best math");

                } else {

                }
                // if so set bestMatch.name, bestmatch.phot, and send back to front using res.json
    }
    surveyData.push(req.body)
    })
}