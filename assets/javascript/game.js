$(document).ready(function() {

    /* Variables */
    var wins = 0;
    var losses = 0;
    var redEmerald;
    var blueEmerald;
    var greenEmerald;
    var purpleEmerald;
   

    // $("#redGem").click(addToUserNum);
    // $("#blueGem").click(addToUserNum);
    // $("#greenGem").click(addToUserNum);
    // $("#purpleGem").click(addToUserNum);


    

    /* Functions */

    /*1*/
    var randomGemNum = function() {
        var gemNum = Math.floor(Math.random() * 12) + 1;
        return gemNum;
    }

    /*2*/
    var randomGoalNum = function() {
        var goalNum = Math.floor(Math.random() * 101) + 19;
        return goalNum;
    }

    $("#goalNum").append(randomGoalNum);

    /*3*/
    var addToUserNum =  function() {
        // - updates the user's total number when user clicks on a gem. -
        // - use emerald(gem) vairables that have the value from the randomGemNum fuction. -
    }

    /*4*/
    var userTotalNum = function() {
        // - This function adds to the user's total number. -
    }

    /*5*/
    var winLog = function() {
        if(randomGoalNum === userTotalNum) {
            wins++;
            $("#wins").text(wins);
            startRound;
        }
    }

    /*6*/
    var lossLog = function() {
        if(randomGoalNum < userTotalNum) {
            losses++;
            $("#losses").text(losses);
            startRound;
        }
    }

    /*7*/
    var startRound = function() {
        // when the winLog or lossLog functions are ran the game starts over. 
    }

});