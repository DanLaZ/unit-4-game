$(document).ready(function() {

    /* Variables */
    var redEmerald;
    var blueEmerald;
    var greenEmerald;
    var purpleEmerald;
    var wins = 0;
    var losses = 0;


    /* html Updates */
    $("goalNum").html();
    $("userNum").html();
    $("wins").html();
    $("losses").html();


    

    /* Functions */

    /*1*/
    var randomGemNum = function() {
        var gemNum = Math.floor(Math.random() * 12) + 1;
        return gemNum;
    }


    redEmerald.attr("data-num", randomGemNum);
    blueEmerald.attr("data-num", randomGemNum);
    greenEmerald.attr("data-num", randomGemNum);
    purpleEmerald.attr("data-num", randomGemNum);
    $("#redGem").append(redEmerald);
    $("#blueGem").append(blueEmeral);
    $("#greenGem").append(greenEmerald);
    $("#purpleGem").append(purpleEmerald);

    /*2*/
    var randomGoalNum = function() {
        var goalNum = Math.floor(Math.random() * 101) + 19;
        return goalNum;
    }

    $("#goalNum").append(randomGoalNum);

    /*3*/
    var addToUserNum =  function() {

    }

    /*4*/
    var winLog = function() {

    }

    /*5*/
    var lossLog = function() {

    }

    /*6*/
    var endRound = function() {

    }

    /*7*/
    var startRound = function() {

    }

});