const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

var allData = syncReadFile('data/day7input.txt');

const Commands = {
    cdRoot : 'cdRoot',
    cdUp : 'cdUp',
    cdIn : 'cdIn',
    ls : 'ls',
    file : 'file',
    dir : 'dir',
}

class TreeNode {
    constructor(value, path, parent) {
      this.value = value;
      this.path = path;
      this.parent = parent;
      this.descendants = [];
      this.childValue = 0;
    }
}

function interpretCommand(command) {
    if(command.charAt(0) == '$') {
        if(command == "$ cd /") { return Commands.cdRoot }
        if(command == "$ cd .."){ return Commands.cdUp }
        if(command == "$ ls") { return Commands.ls }
        else { return Commands.cdIn }
    } 
    else if(command.charAt(0) == 'd') {
        return Commands.dir
    }
    else {
        return Commands.file
    }
}

function findChildNodeIndexByPath(parentNode, childPath){
    for(var i = 0; i < parentNode.descendants.length; i++) {
        if (parentNode.descendants[i].path == childPath) { return i }
    }
}

var currentPath = "/"
const root = new TreeNode(0, "/", null)
var allFolders = [root]
var currentNode = root
function constructTree(allData) {
    for(var i = 0; i < allData.length; i++) {
        const command = allData[i]
        const commandType = interpretCommand(command)
        switch(commandType){
            case Commands.cdRoot:
                currentPath = "/";
                currentNode = root
                break
            case Commands.cdUp:
                const secondtoLastIndex = currentPath.lastIndexOf('/', currentPath.lastIndexOf('/')-1)
                currentPath = currentPath.substring(0, secondtoLastIndex + 1); //+1 to keep the slash
                currentNode = currentNode.parent
                break
            case Commands.ls: 
                break
            case Commands.cdIn:
                const destinationFolder = command.split(' ')[2]
                currentPath += destinationFolder + "/"
                const newNodeIndex = findChildNodeIndexByPath(currentNode, currentPath)
                currentNode = currentNode.descendants[newNodeIndex]
                break
            case Commands.dir:
                const newFolderName = command.split(' ')[1]
                const newFolderPath = currentPath + newFolderName + "/"
                var newNode = new TreeNode(0, newFolderPath, currentNode)
                currentNode.descendants.push(newNode)
                allFolders.push(newNode)
                break
            case Commands.file:
                const newFileName = command.split(' ')[1]
                const newFileSize = parseInt(command.split(' ')[0])
                const newFilePath = currentPath + newFileName
                var newNode = new TreeNode(newFileSize, newFilePath, currentNode)
                currentNode.descendants.push(newNode)
                addValueToParents(newNode)
                break
        }
    }
}

function addValueToParents(fileNode) {
    var currentNode = fileNode
    var fileSize = fileNode.value
    while(currentNode.parent != null){
        currentNode = currentNode.parent
        currentNode.childValue += fileSize
    }
}

function getPartOneAnswer(allFolders) {
    var sum = 0
    for(var i = 0; i < allFolders.length; i++) {
        if(allFolders[i].childValue <= 100000) {
            sum += allFolders[i].childValue
        }
    }
    return sum
}

function getPartTwoAnswer(allFolders) { 
    const unusedSpace = 70000000 - allFolders[0].childValue
    const spaceNeededToBeDeleted = 30000000 - unusedSpace
    var bestDirectoryIndex = 0;
    var bestDirectorySize = allFolders[0].childValue;
    for(var i = 0; i < allFolders.length; i++) {
        if(allFolders[i].childValue >= spaceNeededToBeDeleted && allFolders[i].childValue < bestDirectorySize) {
            bestDirectoryIndex = i
            bestDirectorySize = allFolders[i].childValue
        }
    }
    return allFolders[bestDirectoryIndex].childValue
}

constructTree(allData)

console.log("Part 1 Answer: " + getPartOneAnswer(allFolders))
console.log("Part 2 Answer: " + getPartTwoAnswer(allFolders))
