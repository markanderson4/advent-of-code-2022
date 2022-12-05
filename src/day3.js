const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

var allData = syncReadFile('data/day3Input.txt');

var Rucksack = function(firstHalf, secondHalf) {
    this.firstHalf = firstHalf;
    this.secondHalf = secondHalf;
}

function splitData(data) {
    return new Rucksack(data.slice(0, data.length / 2), data.slice(data.length / 2 , data.length))
}

function getCharValue(character) {
    if (character == character.toUpperCase()) {
        return character.charCodeAt(0) - 38;
    }
    return character.charCodeAt(0) - 96;
}

function getCommonChars(rucksack, part) {
    var commonChars = "";
    if (part == "partOne") { 
        for(var i = 0; i < rucksack.firstHalf.length; i++){
            if(rucksack.secondHalf.indexOf(rucksack.firstHalf[i]) > -1){
                commonChars += rucksack.firstHalf[i];
            }
        }
    }
    else {
        for(var i = 0; i < rucksack[0].length; i++) {
            if(rucksack[1].indexOf(rucksack[0].charAt(i)) > -1 && 
                rucksack[2].indexOf(rucksack[0].charAt(i)) > -1) {
                    commonChars += rucksack[0].charAt(i);
                }
        }
    }
    return commonChars;
}

var partOneSum = 0;
for(var i = 0; i < allData.length; i++) {
    partOneSum += getCharValue(getCommonChars(splitData(allData[i]), "partOne"));
}

var partTwoSum = 0;
for(var i = 0; i < allData.length - 2; i += 3) {
    var elfGroup = [allData[i], allData[i+1], allData[i+2]];
    partTwoSum += getCharValue(getCommonChars(elfGroup, "partTwo"))
}

console.log("Part One: " + partOneSum + "\nPart Two: "  + partTwoSum);