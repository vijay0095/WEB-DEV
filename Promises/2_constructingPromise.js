const { resolve } = require("path/posix")

//constructing the Promises
let myPromise = new Promise(function(resolve, reject){
    let a = "Pepcoders"
    let b = "Pepcodrs"

    if( a===b){
        resolve()
        //resolve is responsible to fillfullment  the promises
    }
    else{
        reject()
    }

})

myPromise.then(function(){
    console.log("Equal")
})

myPromise.catch(function(){
    console.log("Not Equal")
})