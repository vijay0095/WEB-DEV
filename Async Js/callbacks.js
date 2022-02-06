// //callabck -> Any function that can passed through another function is known as  Callback function

// function printFirstName(FirstName,Callback,callabck1){
//     console.log(FirstName)
//     Callback('Vishwakarma')
//     callabck1(26)

// }


// function printLastName(LastName){
//     console.log(LastName)
// }

// function printAge(age){
//     console.log(age)
// }

// printFirstName('Vijay',printLastName,printAge)

//Calcultor using callback function...> add, sub, mul ,div
function calc(add,sub,mul,div){

    add(2,6)
    sub(10,5)
    mul(2,5)
    div(10,2)
}

function printAdd(a,b){
    console.log(a+b)
}
function printSub(a,b){
    console.log(a-b)
}
function printMul(a,b){
    console.log(a*b)
}
function printDiv(a,b){
    console.log(a/b)
}

calc(printAdd,printSub,printMul,printDiv)