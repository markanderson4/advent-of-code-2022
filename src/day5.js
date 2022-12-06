const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

var allData = syncReadFile('data/day5input.txt');
var i = 0;
while(allData[i].length != 0){
    i++;
}

var inputData = allData.slice(0, i)
var commandData = allData.slice(i+1, allData.length)

var labelRow = inputData[i-1];
var bucketLocations = new Array()
for(var k = 0; k < labelRow.length; k++) {
    if(labelRow[k] != ' '){
        bucketLocations.push(k)
    }
}
//console.log("bucketLocations: " + bucketLocations)

var allBuckets = [];
for(var stackNumber = 0; stackNumber < bucketLocations.length; stackNumber++) {
    var currentStack = new Array();
    for(var j = i-2; j >= 0; j--) {
        var currentRow = inputData[j]
        //console.log("currentRow: " + currentRow + "\ncurentRow[stackNumber]: " + currentRow[bucketLocations[stackNumber]])
        if(currentRow[bucketLocations[stackNumber]] != ' '){
            //console.log("added")
            currentStack.push(currentRow[bucketLocations[stackNumber]])
        }
    }
    //console.log("currentStack (in loop): " + currentStack);
    allBuckets.push(currentStack);
}

//console.log(allBuckets)
// copy by value! Not by reference!
var allBucketsPartTwo = allBuckets;

for(var commandIterator = 0; commandIterator < commandData.length; commandIterator++) {
    const command = commandData[commandIterator].split(" ")
    const oldStackIndex = parseInt(command[3])-1
    const newStackIndex = parseInt(command[5])-1
    const payloadSize = parseInt(command[1])
    // for(var loop = 0; loop < payloadSize; loop++){
    //     const payload = allBuckets[oldStackIndex].pop()
    //     allBuckets[newStackIndex].push(payload)
    // }
    const payload2 = allBucketsPartTwo[oldStackIndex].splice(allBucketsPartTwo[oldStackIndex].length-payloadSize, payloadSize)
    console.log(payload2)
    for(var loopdeloop = 0; loopdeloop < payload2.length; loopdeloop++){
        console.log(payload2[loopdeloop])
        allBucketsPartTwo[newStackIndex].push(payload2[loopdeloop])
    }
    console.log("new receiving stack: " + allBucketsPartTwo[newStackIndex])
    //console.log("old stack: " + allBuckets[oldStackIndex] + "\n newStack: " + allBuckets[newStackIndex] + "\n")
}

var topValuesPartOne = "";
var topValuesPartTwo = ""
for(var looper = 0; looper < bucketLocations.length; looper++){
    var currentBucketPartOne = allBuckets[looper]
    var currentBucketPartTwo = allBucketsPartTwo[looper]
    topValuesPartOne += currentBucketPartOne[currentBucketPartOne.length-1]
    topValuesPartTwo += currentBucketPartTwo[currentBucketPartTwo.length-1]
    console.log()
}

console.log("Part One: " + topValuesPartOne)
console.log("Part Two: " + topValuesPartTwo)



