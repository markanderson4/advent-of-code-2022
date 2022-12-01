const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

var allData = syncReadFile('data/day1Input.txt');

var elfNumber = 0;
var elfCalories = [0];

for(var i = 0; i < allData.length; i++){
    if (allData[i].length != 0){
        elfCalories[elfNumber] += parseInt(allData[i]);
    }
    else {
        elfNumber++;
        elfCalories.push(0)
    }
}

var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log("Highest elf calories: " + Math.max.apply(Math, elfCalories));

elfCalories.sort(function(a, b) { return b - a; });

console.log("Sum of top 3 calorie counts: " + (elfCalories[0] + elfCalories[1] + elfCalories[2]) )

