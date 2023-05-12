// // const {readFileSync, promises: fsPromises} = require('fs');
// // class Elf {
// //      calories:number;
// // }
// // function syncReadFile(filename) {
// //     const contents = readFileSync(filename, 'utf-8');
// //     return contents.split(/\r?\n/);;
// // }
// // const allData: string[] = syncReadFile('data/day1Input.txt');
// // let elfNumber = 0;
// // let elfCalories = [];
// // for(var i = 0; i < allData.length; i++){
// //     if (allData[i].length != 0){
// //         elfCalories[elfNumber] += parseInt(allData[i]);
// //     }
// //     else {
// //         elfNumber++;
// //         elfCalories.push(0)
// //     }
// // }
// const elfs: Elf[] = [];
// let calories = 0;
// allData.forEach((item, index) => {
//     if(item) {
//         calories += parseInt(item);
//     }
//     if(!item || index == allData.length -1){
//         const elf = new Elf();
//         elf.calories = calories;
//         calories = 0;
//         elfs.push(elf);
//     }
// });
// elfs.sort((a, b) => (a.calories > b.calories ? -1 : 1));
// let x = 10;
// // console.log("Highest elf calories: " + Math.max.apply(Math, elfCalories));
// // elfCalories.sort(function(a, b) { return b - a; });
// // console.log("Sum of top 3 calorie counts: " + (elfCalories[0] + elfCalories[1] + elfCalories[2]))
//# sourceMappingURL=day1.js.map