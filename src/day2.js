const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

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