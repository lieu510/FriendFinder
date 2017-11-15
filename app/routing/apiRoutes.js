var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var totalScores = [];
        var lowest = 0;
        for (var i = 0; i < friends.length; i++) {
            var friendScores = friends[i].scores;
            var userScores = req.body['scores[]'];
            var total = 0;
            for (var j = 0; j < friendScores.length; j++) {
                total += Math.abs(friendScores[j] - userScores[j]);
            }
            totalScores.push(total);
            if (totalScores[i] < totalScores[lowest]) {
                lowest = i;
            }
        }
        return res.json(friends[lowest]);
    });

};