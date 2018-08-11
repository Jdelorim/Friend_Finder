var surveyData = require("../app/data/friends");

module.exports = (app) => {
    app.get("/api/survey", (req,res) => {
        res.json(surveyData);
    })
    app.post("/api/friends", (req,res) => {
        var bestMatch={
            name:'',
            photo:'',
            points:null
            }
       console.log("USER DATA FROM FRON: ", req.body)
        var user ={
            name:req.body.name,
            photo:req.body.photo,
            scores:req.body.scores
        }
        
        
        for(var i=0;i<surveyData.length;i++){
            var totDiff = 0;
            var currentFriend = surveyData[i];
            for(var j=0;j<currentFriend.scores.length;j++){
            var currentScore = user.scores[i];
            var friendsScore = currentFriend.scores[j];
             totDiff += Math.abs(parseInt(currentScore) - parseInt(friendsScore));

             console.log("Current difference" ,totDiff);

            }
            
            if(bestMatch.points === null || totDiff <= bestMatch.points){

                bestMatch.points = totDiff;
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
            }
        }
                // use iF statement to check if totoalDiff is less then bestMatch.points
                
                    
                    res.json(bestMatch);
                

                
                // if so set bestMatch.name, bestmatch.phot, and send back to front using res.json
    
        
    surveyData.push(req.body)
    })
}