const fs = require("fs")

console.log('Before')

fs.readFile("1.txt",cb1)

function cb1(err, data ){
    if(err){
        console.log("Error",+ err)
    }
    else{
        console.log("this is the Data -> " + data);
        fs.readFile("2.txt",cb2)
    }
}

function cb2(err, data ){
    if(err){
        console.log("Error",+ err)
    }
    else{
        console.log("this is the Data -> " + data)
    }
}
console.log("After")