// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');
//     const arr = contents.split(/\r?\n/);
//     return arr;
// }

// var allData = syncReadFile('data/day9input.txt');

// class Knot {
//     constructor(xFromStart, yFromStart) {
//       this.xFromStart = xFromStart;
//       this.yFromStart = yFromStart;
//     }
// }

// function move(knot, direction) {
//     switch (direction) {
//         case 'U': 
//             knot.yFromStart += 1
//             return knot
//         case 'R': 
//             knot.xFromStart += 1
//             return knot
//         case 'L': 
//             knot.xFromStart -= 1
//             return knot
//         case 'D': 
//             knot.yFromStart -= 1
//             return knot
//     }
// }

// function getNeededStraightDirection(head, tail) {
//     if(head.xFromStart == tail.xFromStart) {
//         if(head.yFromStart > tail.yFromStart){ return 'U' }
//         return 'D'
//     }
//     if(head.xFromStart > tail.xFromStart) { return 'R' }
//     return 'L'
// }

// function difference(a, b) {
//     return Math.abs(a - b);
// }

// function getDiagonalMovement(head, tail) {
//     if(head.xFromStart > tail.xFromStart) {
//         if(head.yFromStart > tail.yFromStart){
//             return 'UR'
//         }
//         else { return 'DR' }
//     }
//     else if(head.yFromStart > tail.yFromStart) {
//         return 'UL'
//     }
//     return 'DL'
// }

// function makeKnots(numberOfKnots) {
//     let knots = []
//     for(let i = 0; i < numberOfKnots; i++){
//         knots.push(new Knot(0,0))
//     }
//     return knots
// }

// function getKnotString(knot) {
//     return knot.xFromStart + "," + knot.yFromStart
// }

// function solve(allData, numKnots){
//     let knots = makeKnots(numKnots)
//     let uniqueTailPositions = []
//     for(const i in allData){
//         const commands = allData[i].split(' ');
//         const distance = commands[1];
//         const direction = commands[0];
//         for(let k = 0; k < distance; k++){
//             knots[0] = move(knots[0], direction)
//             for(tailNumber = 1; tailNumber < knots.length; tailNumber++) {
//                 let leadingKnot = tailNumber - 1
//                 // no movement needed
//                 if(difference(knots[leadingKnot].xFromStart, knots[tailNumber].xFromStart) < 2 && difference(knots[leadingKnot].yFromStart,  knots[tailNumber].yFromStart) < 2){
//                     continue
//                 }
//                 // movement needed straight
//                 else if(difference(knots[leadingKnot].xFromStart,  knots[tailNumber].xFromStart) == 0 || difference(knots[leadingKnot].yFromStart,  knots[tailNumber].yFromStart) == 0){
//                     knots[tailNumber] = move( knots[tailNumber], getNeededStraightDirection(knots[leadingKnot], knots[tailNumber]))
//                 }
//                 // movement needed diagonally
//                 else {
//                     let diagonalMove = getDiagonalMovement(knots[leadingKnot],  knots[tailNumber])
//                     knots[tailNumber] = move( knots[tailNumber], diagonalMove.charAt(0))
//                     knots[tailNumber] = move( knots[tailNumber], diagonalMove.charAt(1))
//                 }
//             }
//             let tailLocationString =  getKnotString(knots[knots.length - 1])
//             if (uniqueTailPositions.includes(tailLocationString) == false){
//                 uniqueTailPositions.push(tailLocationString)
//             }
//         }
//     }
//     return uniqueTailPositions.length
// }


// console.log("Part 1: " + solve(allData, 2))
// console.log("Part 2: " + solve(allData, 10))