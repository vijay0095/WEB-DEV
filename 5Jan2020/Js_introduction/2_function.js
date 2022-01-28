//Normal function

//function function_name(){  body  }
// function sayHi(){
//     console.log('Hi')
// }
// sayHi()//call to function

// // a,b Paramter with function
// function add(a,b){
//     console.log('Addition is',a+b)
// }
// add(2,6)//here 2, 4 is Arguments in function

//function is treated as 1st class citizin of javascript

// let sayHi = function(){ //anamoyous function
//     console.log('Hi')
// }

// let add = function(a,b){
//     console.log("The addition is ",a+b)
// }

// sayHi()
// add(2,5)
//hare you cane call function before define the function
// multiply(2,5)
// function multiply(a,b){
//     console.log(a*b)
// }

// // multiply(2,5) // here it showing error
// let multiply = function (a,b){
//     console.log(a*b)
// }
// multiply(2,5)//no error ..if you used var , let to amking function.. 
// //then first define the call 

//IIFE(immediately invoked function expression)
//same plce make function and immediatelly call // run only one time
let Substract = (function(a,b){
    console.log(a-b)
})(20,30)