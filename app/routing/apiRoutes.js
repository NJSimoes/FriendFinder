// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//    * This route will also be used to handle the compatibility logic. 

var friends = require("../data/friends");
console.log(friends);
module.exports = function(app) {

app.get("/api/friends", function (req, res) {
    res.json(friends);
});


app.post("/api/friends", function (req, res) {
    var you = (req.body)
    console.log(you)
    friends.push(req.body);
    res.json(true);
    console.log(friends);

    //    * This route will also be used to handle the compatibility logic. 
    // Determine the user's most compatible friend using the following as a guide:
    // * Convert each friends's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).

    //         for each person in friends
            var i = 0
            for (name in friends) {
                i++;
                console.log(scores);
            }
    //         person[i] = friends.scores
        



    // * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
    //   * Example: 
    //     * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    //     * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
    //     * Total Difference: **2 + 1 + 2 =** **_5_**
    // * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
    // * The closest match will be the user with the least amount of difference.
});
}

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================

