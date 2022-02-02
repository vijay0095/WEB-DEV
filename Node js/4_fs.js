//file System module

//*********File****** */

const fileSystem = require('fs')
const path = require('path')
//we will reading, writting, updating and deleting in  the file

// //to read the file we can used readFileSync Method
// let content = fileSystem.readFileSync('fs.txt')
// console.log('file content are --->' + content)
// console.log(content.toString)

//writing file
//to write the data in file we used wirteFileSync Method

// //if file name that is dose not exits then it create a new file.txt and written on
// fileSystem.writeFileSync('fs_1.txt','This is file System data')
// console.log('data written')

// //for file updating ---> appendFileSync method used
// fileSystem.appendFileSync('fs_1.txt',' more data added to file using append')
// console.log('file updated')

// //Delete the file --------> using unlinkSync method
// fileSystem.unlinkSync('fs_1.txt')


//**** Directories ****//
//create, delete, check, stats, content

// //create the directory
// fileSystem.mkdirSync('mydirectory')
// console.log('file Directory created')

// // delete Directory
// fileSystem.rmdirSync('mydirectory')
// console.log('directroy deleted')

// //existsSync method are used to ..check wheter file if exists or not
// //if exists then return true
// let doesExixts = fileSystem.existsSync('1.txt')
// console.log(doesExixts)

// lstats to check whether is file or document
// let Statistics = fileSystem.lstatSync('1.txt')
// console.log('Is it File ? ',Statistics.isFile())//true  
// console.log('Is it Document ? ',Statistics.isDirectory())//false


// //readdirSync is a method to used to see the content the of any directary
// let folderpath = 'C:\\Users\\VIJAY VISHWAKARMA\\Desktop\\M.tech\\WEB-DEV\\FJP-4-DEV-master'
// let foldercontent = fileSystem.readdirSync(folderpath)
// console.log('the folder content is --->',foldercontent)//if you put coma then give in array or if put + then give in String


//copy file form source to destination
let srcFilepath = 'C:\\Users\\VIJAY VISHWAKARMA\\Desktop\\M.tech\\WEB-DEV\\Node js\\1.txt'//requrie soure path
let destFolderpath = 'C:\\Users\\VIJAY VISHWAKARMA\\Desktop\\M.tech\\WEB-DEV\\FJP-4-DEV-master\\'//require the destination path
//require file name
let reqFileName = path.basename(srcFilepath) //1.txt
//define the path for file using join
let destPath = path.join(destFolderpath,reqFileName)// to join the file name  to destination path
fileSystem.copyFileSync(srcFilepath,destPath)// copyFileSync ( source path , destination path)
console.log('file coped')