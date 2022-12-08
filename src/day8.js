const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

var allData = syncReadFile('data/day8input.txt');

function buildArray(allData) {
    var output = []
    for(var rowIndex = 0; rowIndex < allData.length; rowIndex++) {
        var row = []
        for(var columnIndex = 0; columnIndex < allData[rowIndex].length; columnIndex++){
            row.push(parseInt(allData[rowIndex].charAt(columnIndex)))
        }
        output.push(row)
    }
    return output
}

let fullArray = buildArray(allData)

function getColumn(fullArray, index) {
    let column = []
    for(var i = 0; i < fullArray.length; i++) {
        column.push(fullArray[i][index])
    }
    return column
}

function isVisibleFromLeft(row, index) {
    for(var i = 0; i < index; i++){
        if(row[i] >= row[index]){
            return false
        }
    }
    return true
}

function isVisibleFromRight(row, index) {
    for(var i = 0; i < row.length; i++){
        if (i <= index) { continue }
        if(row[i] >= row[index]){
            return false
        }
    }
    return true
}

function isVisibleFromBottom(column, index) {
    for(var i = 0; i < column.length; i++){
        if (i <= index) { continue }
        if(column[i] >= column[index]){
            return false
        }
    }
    return true
}

function isVisibleFromTop(column, index) {
    for(var i = 0; i < index; i++){
        if(column[i] >= column[index]){
            return false
        }
    }
    return true
}

function getVisibleTrees(fullArray) {
    let visibleCount = fullArray[0].length + fullArray[fullArray.length-1].length
    for(var i = 1; i < fullArray.length - 1; i++) {
        visibleCount += 2
        for(var k = 1; k < fullArray[i].length - 1; k++) {
            let column = getColumn(fullArray, k)
            if(isVisibleFromBottom(column, i) 
                || isVisibleFromTop(column, i) 
                || isVisibleFromLeft(fullArray[i], k) 
                || isVisibleFromRight(fullArray[i], k)) {
                    visibleCount+=1
            }
        }
    }
    return visibleCount
}

function getUpwardTrees(column, index) {
    if (index == 0) { return 0 }
    let visibleTrees = 1
    for (let i = index-1; i > 0; i--) {
        if(column[index] > column[i]) {
            visibleTrees++
        } else {
            break
        }
    }
    return visibleTrees
}

function getDownwardTrees(column, index) {
    if (index == column.length - 1) { return 0 }
    let visibleTrees = 1
    for (let i = index+1; i < column.length - 1; i++) {
        if(column[index] > column[i]) {
            visibleTrees++
        } else {
            break
        }
    }
    return visibleTrees
}

function getRightwardTrees(row, index) {
    if (index == row.length-1) { return 0 }
    let visibleTrees = 1
    for (let i = index+1; i < row.length - 1; i++) {
        if(row[index] > row[i]) {
            visibleTrees++
        } else {
            break
        }
    }
    return visibleTrees
}

function getLeftTrees(row, index) {
    if (index == 0) { return 0 }
    let visibleTrees = 1
    for (let i = index-1; i > 0; i--) {
        if(row[index] > row[i]) {
            visibleTrees++
        } else {
            break
        }
    }
    return visibleTrees
}

function getHighestVisibleScore(fullArray){
    let topScore = 0
    for(var i = 0; i < fullArray.length; i++) {
        for(var k = 0; k < fullArray[i].length; k++) {
            let column = getColumn (fullArray, k)
            let leftScore = getLeftTrees(fullArray[i], k)
            let rightScore = getRightwardTrees(fullArray[i], k)
            let upScore = getUpwardTrees(column, i)
            let downScore = getDownwardTrees(column, i)
            let currentScore = leftScore * upScore * downScore * rightScore
            topScore = Math.max(topScore, currentScore)
        }
    }
    return topScore
}

console.log("Part 1 Answer: " + getVisibleTrees(fullArray))
console.log("Part 2 Answer: " + getHighestVisibleScore(fullArray))