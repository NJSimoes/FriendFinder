// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//    * This route will also be used to handle the compatibility logic. 

var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {


app.get("/app/data/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/data/friends"));
});

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newFriens
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});
}

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================

var friends = require("../data/friends");