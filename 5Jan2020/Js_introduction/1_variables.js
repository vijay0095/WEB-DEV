// // variable declration
// // var   let   const

// var a;// intially variable  assginned with undeifned value
// console.log(a)//print on console value

// a = 3
// console.log(a)// defined value 3 print

// a = "I am String"
// console.log(a)// now print string .... we can see that .. javascript is Dyanamic type language

// a = true//bollean
// console.log(a)

// a = null// keyword define tha null value
// console.log(a)

///----> Data type in java script

// // number type
// var e = 1
// var f = 5.7
// var t = 20.2564

// console.log(e)
// console.log(f)
// console.log(t)

// // String type
// var s = 'a'
// var s1 = 'I am String'

// console.log(s)
// console.log(s1)

// //boolean type
// var b1 = true
// var b2 = false

// console.log(b1)
// console.log(b2)

// // null type
// var n = null
// console.log(n)

// // undefnied type
// var u = undefined
// console.log(u)



// //var keyword some problem
// //Redeclaration problem

// var b = 'Hello'
// console.log(b)// print Hello

// var b = 'Bye'
// console.log(b)// print bye
// //to overcome the REdeclaration 
// // let keword used
// let b = 'Hello'
// console.log(b)// print Hello

// // let b = 'Bye'
// // console.log(b)// print Error(Redeclaration error )


// b = 'Bye'
// console.log(b)//reassgining allowed but redeclration not


// //Is Prime number

// var flag = true// maan lo ki sb no. prime h

// var num =  15
// //loop for 
// for(var i = 2; i*i<num;i++){
//     if(num%i == 0){
//         flag =  false
//         break
//     }
// }
// if(flag== true){
//     console.log('Number is Prime')
// }
// else{
//     console.log('Number is Not Prime')
// }

/// 2nd problem with var--> scoping
//let is bolck scoping but var is function scoping

if(10%2 == 0){
    // var a = 'no. is divisible with by 2'
    let a = 'no. is divisible with by 2'

    // console.log(a)
    console.log('This is Block code'+ a)
}
// console.log(a)
