let arr = [
    {name:"A", age : 14, gender :"M"},
    {name:"B", age :34, gender :"M"},
    {name:"C", age :24, gender :"F"},
    {name:"D", age :44, gender :"F"},
    {name:"E", age :44, gender :"M"},
    {name:"F", age :28, gender :"F"},
    {name:"G", age :36, gender :"M"},
    {name:"H", age :47, gender :"F"}

]
//age of all ladies
let FemaleArr = arr.filter(function(n){

    return n.gender == "F"
    // if(n.gender == 'F'){
    //     return true
    // }
    // else{
    //     return false
    // }
})

let FemaleAge = FemaleArr.map(function(n){
    return n.age
})
console.log(FemaleAge)

// ************concept of chaining********
let femaleAge = arr.filter(function(n){
    return n.gender == 'F'
}).map(function(n){
    return n.age
})
console.log('Female ages using concept of chaning-->',femaleAge)