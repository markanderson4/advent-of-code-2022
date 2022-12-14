const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

var allData = syncReadFile('data/day10input.txt');

function difference(a, b) {
    return Math.abs(a - b);
}

var cycleNumber = 0;
var x = 1;
var sum = 0;
var output = ""

function adjustSignalStrength(sum, cycleNumber, x) {
    if((cycleNumber + 20) % 40 == 0){
        return sum += cycleNumber*x;
    }
    return sum
}

function updateOutput(cycleNumber, x) {
    if(difference(cycleNumber, x+1) < 2) {
        output += '#'
    } else {
        output += '.'
    }
    if(cycleNumber % 40 == 0){
        output += '\n'
    }
    console.log("at " + cycleNumber + " x is: " + x)
}

for(i in allData) {
    cycleNumber++;
    console.log("command: " + allData[i])
    updateOutput(cycleNumber, x)
    sum = adjustSignalStrength(sum, cycleNumber, x);
    if(allData[i] != "noop") { 
        cycleNumber++
        updateOutput(cycleNumber, x)
        sum = adjustSignalStrength(sum, cycleNumber, x)
        x += parseInt(allData[i].split(' ')[1])
    }
}

console.log("x: " + x)

console.log(sum)

console.log(output)