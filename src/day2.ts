
const {readFileSync, promises: fsPromises} = require('fs');

const losePoints = 0;
const winPoints = 6;
const drawPoints = 3;

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

function getPlayPoints(playerValue: string) {
    if(isRock(playerValue)) { return 1 }
    if(isPaper(playerValue)) { return 2 }
    if(isScissor(playerValue)) { return 3 }
}

function getOutcomePoints(playerValue: string, opponentValue: string) {
    if(isTie(playerValue, opponentValue)){
        return drawPoints;
    }
    else if( (isRock(playerValue) && isScissor(opponentValue))
                || (isPaper(playerValue) && isRock(opponentValue))
                || (isScissor(playerValue) && isPaper(opponentValue))) {
        return winPoints;
    }
    else{
        return losePoints;
    }
}

function isTie(val1: string, val2: string){
    const isEqual = (isPaper(val1) && isPaper(val2)) || 
    (isRock(val1) && isRock(val2)) || 
    (isScissor(val1) && isScissor(val2))
    return isEqual;
}

function isRock(value: string): boolean{
    return value === "A" || value === "X";
}
function isPaper(value: string): boolean{
    return value === "B" || value === "Y";
}
function isScissor(value: string): boolean{
    return value === "C" || value === "Z";
}

let score = 0;
var allData : string[] = syncReadFile('data/day2Input.txt');
allData.forEach(val => {
    const arr = val.split(' ');
    const playerValue = arr[1];
    const opponentValue = arr[0];
    score += getOutcomePoints(playerValue, opponentValue);
    score += getPlayPoints(playerValue)
})
console.log(score);