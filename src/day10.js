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
var fakeX = 1;
var sum = 0;
var output = ""

function adjustSignalStrength(sum, cycleNumber, x) {
    if((cycleNumber + 20) % 40 == 0){
        return sum += cycleNumber*x;
    }
    return sum
}

function updateOutput(cycleNumber, x) {
    if(difference(cycleNumber, fakeX+1) < 2) {
        output += '#'
    } else {
        output += '.'
    }
    if(cycleNumber % 40 == 0){
        output += '\n'
        //fakeX = cycleNumber
    }
    console.log("at " + cycleNumber + " x is: " + x + " and fakeX is: " + fakeX)
    return fakeX
}

for(i in allData) {
    cycleNumber++;
    console.log("command: " + allData[i])
    fakeX = updateOutput(cycleNumber, x)
    sum = adjustSignalStrength(sum, cycleNumber, x);
    if(cycleNumber % 40 == 0){
        fakeX = cycleNumber+1
    }
    if(allData[i] != "noop") { 
        cycleNumber++
        fakeX = updateOutput(cycleNumber, x)
        sum = adjustSignalStrength(sum, cycleNumber, x)
        x += parseInt(allData[i].split(' ')[1])
        fakeX += parseInt(allData[i].split(' ')[1])
        //eventually remove
        if(cycleNumber % 40 == 0){
            fakeX = cycleNumber+1
        }
    }
}

console.log("x: " + x)

console.log(sum)

console.log(output)