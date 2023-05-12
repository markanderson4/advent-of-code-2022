var _a = require('fs'), readFileSync = _a.readFileSync, fsPromises = _a.promises;
var losePoints = 0;
var winPoints = 6;
var drawPoints = 3;
function syncReadFile(filename) {
    var contents = readFileSync(filename, 'utf-8');
    var arr = contents.split(/\r?\n/);
    return arr;
}
function getPlayPoints(playerValue) {
    if (isRock(playerValue)) {
        return 1;
    }
    if (isPaper(playerValue)) {
        return 2;
    }
    if (isScissor(playerValue)) {
        return 3;
    }
}
function getOutcomePoints(playerValue, opponentValue) {
    if (isTie(playerValue, opponentValue)) {
        return drawPoints;
    }
    else if ((isRock(playerValue) && isScissor(opponentValue))
        || (isPaper(playerValue) && isRock(opponentValue))
        || (isScissor(playerValue) && isPaper(opponentValue))) {
        return winPoints;
    }
    else {
        return losePoints;
    }
}
function isTie(val1, val2) {
    var isEqual = (isPaper(val1) && isPaper(val2)) ||
        (isRock(val1) && isRock(val2)) ||
        (isScissor(val1) && isScissor(val2));
    return isEqual;
}
function isRock(value) {
    return value === "A" || value === "X";
}
function isPaper(value) {
    return value === "B" || value === "Y";
}
function isScissor(value) {
    return value === "C" || value === "Z";
}
var score = 0;
var allData = syncReadFile('data/day2Input.txt');
allData.forEach(function (val) {
    var arr = val.split(' ');
    var playerValue = arr[1];
    var opponentValue = arr[0];
    score += getOutcomePoints(playerValue, opponentValue);
    score += getPlayPoints(playerValue);
});
console.log(score);
//# sourceMappingURL=day2.js.map