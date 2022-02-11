//some : conditon check : to get true and false based on the condition
//in some it will retrun true if find 1 or more element satsify  the  condition 
//it will retrun the boolean 

const transactions = [-1000,-3000,-4000,-2000,-898,-3800,-4500]

let anyDeposit = transactions.some(function(n){
    return n>0
})
console.log(anyDeposit)