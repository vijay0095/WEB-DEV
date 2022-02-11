//higer order function are the funtion that operrate on other function
//Higher order funtion in JS are for array

//In simple words a higher order function is a function that a function as an arugument 
//or returns the fuction as output

//MAP is itself a funciton which is predefined in JS
//map takes a callback funciton as as arugument 
//map will call the callback function as many times  as the alement of array'
// 
let arr = [2,4,5,7,9,]

let sqarr = arr.map(function(n){
    return n*n
})

console.log('Orignial Array',arr)
console.log('Squred array',sqarr)

//you have to used the map function  to separate the  firstName and lastName 
let nameArr = ['vijay vishwakarma','kamlesh verma','anant tripathi']

let modifiedArr = nameArr.map(function(n){
    let partsofanme = n.split(' ')
    return partsofanme
})
console.log(modifiedArr)

//
const transactions = [1000,3000,4000,2000,-898,3800,-4500]
const inrtToUsd = 74
let ans$ = transactions.map(function(n){
    return (n/inrtToUsd).toFixed(0)//to fixed the  integer valueoo r redused the decimal value
})
console.log(ans$)