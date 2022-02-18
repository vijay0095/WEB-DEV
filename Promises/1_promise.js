const { Console } = require('console')
let fs = require('fs')

console.log('Before')

// fs.readFile("f1.txt", function(err,data){
//     if(err){
//         console.log("Error")
//     }
//     else{
//         console.log("This is data -> "+data)
//     }
// })


//Pending Phase 
let promiesVariable = fs.promises.readFile("f1.txt")
// console.log(promiesVariable)

//Fullfill the promises and setlled 
promiesVariable.then(function(data){
    console.log("this flie data -> "+data)
})

//Rejected and Setlled
promiesVariable.catch(function(err){
    Console.log(err)
})

console.log("After")