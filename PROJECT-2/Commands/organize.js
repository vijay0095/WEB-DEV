//organize function Modu

const fs = require('fs')//inmport filesystem module
const path = require('path')//import path module


let types = {
    media: ["mp4", "mkv", "mp3",'jpg','png'],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};


function organizeFn(dirPath){
    let destPath
//if path is not given then then we have to first to chech weather  given or not
    if(dirPath==undefined){
        console.log('Please Enter the Vaild Directary Path')
        return;//retrun to main 
    }
//check weather the directary path if exists for not ....
    let doesExist = fs.existsSync(dirPath);// true
    
    if(doesExist == true){//create the path where the new file to be created 
        destPath = path.join(dirPath,'Organised_files')//join 

        if(fs.existsSync(destPath)==false){//if allready Organised_file not created
            fs.mkdirSync(destPath);//create new path and make new folder
        }
        else{
            console.log('Folder Already Exists')
        }
    }
    else{
        console.log('Please Enter the Valid Path')
        return;
    }

    organizeHelper(dirPath,destPath)

}

function organizeHelper(src ,dest){
    let childName = fs.readdirSync(src)//read the file in source folder
    // console.log(childName) ---> it show all file names but we require each file path

    for(let i = 0; i<childName.length ; i++){
        let childAdress = path.join(src,childName[i])// get each file or folder directary path
        // console.log(childAdress)
        // reuired to remove the Folder 
        let isFile = fs.lstatSync(childAdress).isFile()//get true or false

        if(isFile==true){
            // console.log(childAdress)
            let FileCategory = getCategory(childName[i])// this function gives category
            // console.log(childName[i]+' belongs to '+ FileCategory)

            sendFiles(childAdress,dest,FileCategory)
        }
    }


}

function getCategory(fileName){
    //required extention for eaxh file to match with type
    let ext = path.extname(fileName).slice(1)// here remove the dot with extension silce used
    // console.log(ext)

    for(let key in types){//loop apply in object to access all the key
        let cTypeArr = types[key]
        //we took out all the category types form types
        // console.log(cTypeArr)

        for(let i=0;i<cTypeArr.length;i++){
            if(ext==cTypeArr[i]){
                return key
            }
        }
    }
    return 'others'
}

function sendFiles(srcFilePath , dest , FileCategory){
    //we will create file path for each encounter file type
    let catFile = path.join(dest,FileCategory)

    if(fs.existsSync(catFile)== false){
        fs.mkdirSync(catFile)
    }

    let fileName = path.basename(srcFilePath)
    let destFilePath = path.join(catFile,fileName)

    fs.copyFileSync(srcFilePath,destFilePath)

    fs.unlinkSync(srcFilePath)
    console.log('File is Organized')

}

module.exports ={
    organizeKey : organizeFn
}