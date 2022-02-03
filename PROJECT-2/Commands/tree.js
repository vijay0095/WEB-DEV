//tree function module

const fs = require('fs')//inmport filesystem module
const path = require('path')//import path module

function treeFn(dirPath){
    if(dirPath==undefined){
        console.log('Please Provide Directary Path')
        return;
    }
    else{
        let doesExists = fs.existsSync(dirPath)
        if(doesExists == true){
            treeHelper(dirPath,' ')
        }

    }

}


function treeHelper(targetPath,indent){
    let isFile = fs.lstatSync(targetPath).isFile()

    if(isFile == true){
        let fileName = path.basename(targetPath)
        console.log(indent + '├──' + fileName)
    }
    else{
        let folderName = path.basename(targetPath)
        console.log(indent + '└──' + folderName)

        let children =  fs.readdirSync(targetPath)
        for(let i = 0; i<children.length ; i++){
            let childPath = path.join(targetPath, children[i])

            treeHelper(childPath,indent + '\t')

        }
    }

}

module.exports = {
    treeFnKey : treeFn
}