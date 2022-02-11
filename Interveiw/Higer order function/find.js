//finds return the first elemnt of the array that satisfy the condtion
//it wil  retrun the value not arrary

const transactions = [1000,3000,4000,2000,-898,3800,-4500]

const FirstWithdrawl = transactions.find(function(n){
    return n<0
})
console.log(FirstWithdrawl)