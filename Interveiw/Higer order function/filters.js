let arr = [2,4,3,6,8,9,5,10]

//filter return new array coantining array element that satisfied s particular contion
//if condition is true it will filter out those element  in a new array aand other will discard
//it works on bollean 

//find the prime no in array
let evenNumberArr = arr.filter(function(n){
    return  n%2 ==0
})
console.log(evenNumberArr)

//find the profits
const transactions = [1000,3000,4000,2000,-898,3800,-4500]
let ans$ = transactions.filter(function(n){
    return n>0
})
console.log(ans$)