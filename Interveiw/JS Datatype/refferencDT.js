//Reffenerce Data type ...
//object //function //array
//techinically.. all are objects

// //objest definds with their key
// let person= {
//     name : 'vijay',
//     age : 26
// }
// console.log(person, typeof(person))

// //array
// let arr = [1, 2 ,'a','abc',null, undefined]
// console.log(arr,typeof(arr))//object...not array...that is array data type is not present ...
// //object some what its modified to used as array 

// //function
// function great(){
//     console.log('HELLO')
// }
// console.log(great,typeof(great))

//firstPerson store in stack... and vule assigned in Hep
let firstPerson = {
    name : 'vijay',
    age : 26
}

let secondPerson = firstPerson

secondPerson.name = 'vishwakarma'
console.log(firstPerson) //vishwakarma
console.log(secondPerson) //vishwakarma
