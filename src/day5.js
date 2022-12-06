const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

var allData = syncReadFile('data/day5input.txt');

function getDividingLineIndex(allData) {
    var i = 0;
    while(allData[i].length != 0){
        i++;
    }
    return i;
}

function getBucketColumnLocations(labelRow) {
    var bucketLocations = new Array()
    for(var k = 0; k < labelRow.length; k++) {
        if(labelRow[k] != ' '){
            bucketLocations.push(k)
        }
    }
    return bucketLocations;
}

function getAllBuckets2dArray(bucketLocations, startingBucketIndex, inputData) {
    var allBuckets = [];
    for(var stackNumber = 0; stackNumber < bucketLocations.length; stackNumber++) {
        var currentStack = new Array();
        for(var i = startingBucketIndex; i >= 0; i--) {
            var currentRow = inputData[i]
            if(currentRow[bucketLocations[stackNumber]] != ' '){
                currentStack.push(currentRow[bucketLocations[stackNumber]])
            }
        }
        allBuckets.push(currentStack);
    }
    return allBuckets
}

const dividingLineIndex = getDividingLineIndex(allData)
const inputData = allData.slice(0, dividingLineIndex)
const commandData = allData.slice(dividingLineIndex+1, allData.length)
const labelRow = inputData[dividingLineIndex-1];
var startingBucketIndex = dividingLineIndex-2;
const bucketLocations = getBucketColumnLocations(labelRow)

var allBuckets = getAllBuckets2dArray(bucketLocations, startingBucketIndex, inputData)
var allBucketsPartTwo = getAllBuckets2dArray(bucketLocations, startingBucketIndex, inputData);

for(var commandIterator = 0; commandIterator < commandData.length; commandIterator++) {
    const command = commandData[commandIterator].split(" ")
    const oldStackIndex = parseInt(command[3])-1
    const newStackIndex = parseInt(command[5])-1
    const payloadSize = parseInt(command[1])
    
    // Part One
    for(var loop = 0; loop < payloadSize; loop++){
        const payload = allBuckets[oldStackIndex].pop()
        allBuckets[newStackIndex].push(payload)
    }

    // Part Two
    const payload2 = allBucketsPartTwo[oldStackIndex].splice(allBucketsPartTwo[oldStackIndex].length-payloadSize, payloadSize)
    for(var loopdeloop = 0; loopdeloop < payload2.length; loopdeloop++){
        allBucketsPartTwo[newStackIndex].push(payload2[loopdeloop])
    }
}

var topValuesPartOne = "";
var topValuesPartTwo = ""
for(var looper = 0; looper < bucketLocations.length; looper++){
    var currentBucketPartOne = allBuckets[looper]
    var currentBucketPartTwo = allBucketsPartTwo[looper]
    topValuesPartOne += currentBucketPartOne[currentBucketPartOne.length-1]
    topValuesPartTwo += currentBucketPartTwo[currentBucketPartTwo.length-1]
}

console.log("Part One: " + topValuesPartOne)
console.log("Part Two: " + topValuesPartTwo)