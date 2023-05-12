/*
The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:
n
A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?
*/
// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');
//     const arr = contents.split(/\r?\n/);
//     return arr;
// }

function getOutcomePoints(myPlay, opponentPlay, part) {
    if(part == "partOne"){
        switch(opponentPlay) {
            case 'A':
                if(myPlay == 'X') { return 3 }
                else if (myPlay == 'Y') { return 6 }
                else if (myPlay == 'Z') { return 0 }
            case 'B':
                if(myPlay == 'X') { return 0 }
                else if (myPlay == 'Y') { return 3 }
                else if (myPlay == 'Z') { return 6 }
            case 'C':
                if(myPlay == 'X') { return 6 }
                else if (myPlay == 'Y') { return 0 }
                else if (myPlay == 'Z') { return 3 }
        }
    } else {
        switch(myPlay) {
            case 'X': return 0;
            case 'Y': return 3;
            case 'Z': return 6;
        }
    }
}

function getMyPlayPoints(myPlay, opponentPlay, part) {
    if(part == "partOne"){
        if (myPlay == 'X') { return 1 }
        else if (myPlay == 'Y') { return 2 }
        else if (myPlay == 'Z') { return 3 }
    } else {
        switch(opponentPlay) {
            case 'A':
                if(myPlay == 'X') { return 3 }
                else if (myPlay == 'Y') { return 1 }
                else if (myPlay == 'Z') { return 2 }
            case 'B':
                if(myPlay == 'X') { return 1 }
                else if (myPlay == 'Y') { return 2 }
                else if (myPlay == 'Z') { return 3 }
            case 'C':
                if(myPlay == 'X') { return 2 }
                else if (myPlay == 'Y') { return 3 }
                else if (myPlay == 'Z') { return 1 }
        }
    }
}

var allData = syncReadFile('data/day2Input.txt');

var partOneSum = 0;
var partTwoSum = 0;
for(var i = 0; i < allData.length; i++){
    var opponentPlay = allData[i].charAt(0);
    var myPlay = allData[i].charAt(allData[i].length - 1);
    partOneSum += getMyPlayPoints(myPlay, opponentPlay, "partOne") + getOutcomePoints(myPlay, opponentPlay, "partOne");
    partTwoSum += getMyPlayPoints(myPlay, opponentPlay, "partTwo") + getOutcomePoints(myPlay, opponentPlay, "partTwo");
}

console.log("Total score part 1: " + partOneSum + "\nTotal Score part 2: " + partTwoSum);

