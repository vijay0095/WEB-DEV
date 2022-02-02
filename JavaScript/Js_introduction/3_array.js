// Array - Array is odered collection of elemrnt 

// let arr = [] // array delcration

// let cars = ['BMW','Marcedes','Mastang','Ferrari']//ame type of data --> string
// console.log(cars)
// /// you can store different type data type in a single array
// // let testArr = ['BMW', 20, true, undefined, 20.54]
// // console.log(testArr) 

// // Access of element form the array using the indices of array
// // console.log(cars[3])//Farrari
// // console.log(cars[0]) // BMW
// // console.log(cars[5])// no element present .. so its print undefined

// // // Replacing the element in Array
// // cars[2] = 'ABC'// replcing the Mastand ---> ABC
// // console.log(cars)

// // // Add method
// // cars[4] = 'DEF'
// // cars[6] = 'QRds'// indice on 5  it store empty item 
// // console.log(cars)

// //pop method -  to remove the last elemnt of array
// cars.pop()
// console.log(cars)

// //push method -  to add element at last indice in array
// cars.push('Ferrari') 
// console.log(cars)

// // shift - unshift method  .. applicale on stated indice
// //shift-  method - to remove the element form first in array
// cars.shift()
// console.log(cars)

// //unshift - to add element form starting of array
// cars.unshift('Tata Nano')
// console.log(cars)

// // lenth of array
// console.log('lenth of array',cars.length)

// 2d Array
let matrix = [
    [12 , 0 , 45],
    [14 , -8 , 4],
    [0 , 25 , 4]
]
console.log(matrix[1][1])