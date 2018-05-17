// Declare inital variables
var randNum;
var totScore;
var rupeeArr = [];
var elementImgArr = ["#green", "#blue", "#red", "#yellow"];

// Create a function to initialize the game
function setInitVals() {
    // Generate "random" integer between 19 and 120
    randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // Write that number to the html
    $("#rand-num").html(randNum);

    // Set each rupee color to "random" integer between 1 and 12
    for (var i = 0; i < 4; i++) {
        rupeeArr[i] = Math.floor(Math.random() * 12) + 1;
    }

    // Set initial user score to 0
    totScore = 0;
    $("#total-score").html(totScore);

}

// Declare wins and losses variables to keep track of score
var wins = 0;
var losses = 0;

// Create function to restart game and update score
function gameOver(won) {
    // Check condition of gameWon variable and update score accordingly
    if (won === true) {
        wins++;
        $("#num-wins").html(wins);
    } else {
        losses++;
        $("#num-losses").html(losses);
    }
    // Call setInitVals() to reset random number, total score, and rupee values
    setInitVals();
}

// Function will update html upon click events and check game status after 
//  each click. This function must take an argument so that each color rupee 
//  gets its corresponding element in the rupee random number array
function clicktoHTML(element) {
    // Create click event function to update total score when rupee is clicked
    $(elementImgArr[element]).click(function () {
        totScore += rupeeArr[element];
        $("#total-score").html(totScore);

        // Check after each click if game has been won or lost and 
        //  if so, restart game
        if (totScore === randNum) {
            gameOver(true);
        } else if (totScore > randNum) {
            gameOver(false);
        }
    })
}

$(document).ready(function () {
    // Call function to set values
    setInitVals();

    for (i in elementImgArr) {
        // Call function to generate click event for each rupee
        clicktoHTML(i);
    }
})
