CrystalsCollector (Chaos Emeralds) - Pseudo Code
<!----------------------------->

Design Start
<!---------->

* Sonic the Hedgehog Theme *
* ------------------------ *

* html/css *
- Content | Content centered -
1.Header/title <h1>
2.Instructions/Intro 
3.Number the player needs to reach | Wins/Losses(under numbers)
4.Emerald Images
5.Desired Number/Total Score header <h2>
6.Number player currently has
* ------------------------------------------------------------- *
1.
- Header Title <h1> will be an image of the classic Sonic the Hedgehog Chaos Emeralds title -
2.
- Explain that Sonic has to collect the rest of the Chaos Emeralds to become Super Sonic - 
3.
- Number to be reached can be styled like a Sonic starter menu | Wins/Losses can be counted as rings -
4.
- Use the 16-bit images (PhotoShop images) | 4 chaos emeralds (red, blue, green, purple) -
5.
- Starter menu style -
6.
- Currnet Number Player has will have a Starter Menu Style -
* ---------------------------------------------------------------------------------------------------- *

- Content Order/html Layout -
* ----------------------------------- *
1.Header/title
5.Desired Number/Total Score header
3.|6. Both Numbers <Wins/Losses will be under 3 & 6> 
4.Emerald Images
2.Instructions/Intro
* ----------------------------------- *
Design End
<!-------->


JavaScript Logic Start
<!-------------------->

* Global vars *
* ---------------- *
- 6 vars needed to store emerald(gem) values and wins/losses -

* Needed Functions *
* ----------------- * 
1.randomGemNum
- do Math.floor(Math.random) to get a number for the gems. -

2.randomGoalNum
- do Math.floor(Math.random) to get a number for the goal number. -

- then append it so that it shows up on the page. -

3.addToUserNum
- updates the user's total number when user clicks on a gem. -
- use emerald(gem) vairables that have the value from the randomGemNum fuction. -

4.userTotalNum
- This function adds to the user's total number. -

5.winLog

6.lossLog

7.startRound
- when the winLog or lossLog functions are ran the game starts over. -













