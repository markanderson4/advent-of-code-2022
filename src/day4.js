// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');
//     const arr = contents.split(/\r?\n/);
//     return arr;
// }

// var allData = syncReadFile('data/day4Input.txt');

// function isCompleteOverlap(ranges) {
//     var isFirstRangeBigger = (ranges[1] - ranges[0]) > (ranges[3] - ranges[2])
//     if(isFirstRangeBigger) {
//         if(ranges[1] >= ranges[3] && ranges[0] <= ranges[2]) { return true }
//     }
//     else {
//         if(ranges[3] >= ranges[1] && ranges[2] <= ranges[0]) { return true }
//     }
//     return false
// }

// function isPartialOverlap(ranges) {
//     if(isCompleteOverlap(ranges)) {
//         return true
//     }
//     return (ranges[1] >= ranges[2] && ranges[1] <= ranges[3]) || (ranges[0] >= ranges[2] && ranges[0] <= ranges[3])
// }

// var part1Count = 0;
// var part2Count = 0;
// for(var i = 0; i < allData.length; i++){
//     const ranges = allData[i].split(/-|,/).map(Number)
//     if(isCompleteOverlap(ranges)) {
//         part1Count++;
//     }
//     if(isPartialOverlap(ranges)){
//         part2Count++;
//     }

// }

// console.log("Part One: " + part1Count)
// console.log("Part Two: " + part2Count)