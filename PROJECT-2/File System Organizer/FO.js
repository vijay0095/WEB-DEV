// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

// how to take the input form terminal window
// let input = process.argv[2]//here 2 represent indices

const fs = require('fs')//inmport filesystem module
const path = require('path')//import path module
const helpmodule = require('../Commands/help')//helpfunction module
const treeModule = require('../Commands/tree')//tree function module
const organizeModule = require('../Commands/organize')//organize function module

let input =  process.argv.slice(2) // taking the value 2..3...4..so on indices

let inputArr = input
let command = inputArr[0]// excrat the input command(tree, organize , help)



switch(command){
    case 'tree' :
        treeModule.treeFnKey(inputArr[1])
        break;
    case 'organize' :
       organizeModule.organizeKey(inputArr[1])// call to function we require directary 
        break;
    case 'help' :
        helpmodule.helpFnKey()
        break;
    default :
        console.log('Please enter a Valid command')
        break;

}

