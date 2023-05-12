// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');
//     const arr = contents.split(/\r?\n/);
//     return arr;
// }

// let allData = syncReadFile('data/day12input.txt');


// var fullArray = []
// var startRow, startColumn, endRow, endColumn
// for(var rowIndex = 0; rowIndex < allData.length; rowIndex++) {
//     var row = []
//     for(var columnIndex = 0; columnIndex < allData[rowIndex].length; columnIndex++){
//         row.push(allData[rowIndex].charAt(columnIndex))
//         if(allData[rowIndex].charAt(columnIndex) == 'S'){
//             startRow = rowIndex
//             startColumn = columnIndex
//         }
//         else if(allData[rowIndex].charAt(columnIndex) == 'E'){
//             endRow = rowIndex
//             endColumn = columnIndex
//         }
//     }
//     fullArray.push(row)
// }

// let currentRow = startRow
// let currentColumn = startColumn




// console.log(fullArray)
// console.log(startRow)
// console.log(startColumn)
// console.log(endRow)
// console.log(endColumn)