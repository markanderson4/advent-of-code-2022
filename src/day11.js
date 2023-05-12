// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');
//     const arr = contents.split(/\r?\n/);
//     return arr;
// }

// let allData = syncReadFile('data/day11input.txt');
// let monkeys = []

// class Monkey {
//     constructor(items, operation, test) {
//       this.items = items;
//       this.operation = operation;
//       this.test = test;
//     }
// }
// //monkeyNumber = parseInt(allData[i].split(' ')[1].slice(0, -1))

// let items, operation, test
// for(i in allData){
//     let monkeyNumber;
//     if(allData[i].length == 0){
//         monkeys.push(new Monkey(items, operation, test))
//     }
//     if(allData[i].includes("Monkey")){
//         monkeyNumber = parseInt(allData[i].split(' ')[1].slice(0, -1))
//         monkeys.push([])
//     }

// }

// console.log(monkeys)