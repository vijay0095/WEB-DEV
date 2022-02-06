//Synchronous type file reading
console.log('before')

const fs = require('fs')
let data = fs.readFileSync('1.txt')
console.log('This is 1.txt data ----> '+ data)

console.log('After')
// print -------->
// before
// This is 1.txt data ----> I am file data 1.txt
// After

//Synchronus type file reading
console.log('before')

fs.readFile('1.txt', cb)// we have to pass the one call back for asyncronus
function cb(err,data){//using call back function
    if(err){
        console.log(err)// fisrt error funcition
    }
    else{
        console.log('This is 1.txt data ---->'+ data)
    }
}

fs.readFile('2.txt', cb2)// we have randan data i.e .. some time file 1 and some time file 2 data.... change theri order
function cb2(err,data){// all commands go to call stack then if it is find that ,,async then is go node api(api works on v8 engine) list... anf the call
    //back function .. go callback queue.. with random nature..
    //after ecutation of all program .. event loop check .wether,, call stack empty orr not
    // after that..it pass one by one callback function and excute
    if(err){
        console.log(err)// 
    }
    else{
        console.log('This is 2.txt data ---->'+ data)
    }
}

console.log('After')
// before
// After
// This is 2.txt data ---->I am file 2 Data !!
// This is 1.txt data ---->I am file 1 data !!


//how to specified the data in order----->usnig call back function in callback
