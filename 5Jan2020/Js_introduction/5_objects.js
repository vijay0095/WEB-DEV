//javaScript ojacest always define in key valye pair

//how to declare the object
let obj  = { }//curli braese required 
//example
let person = {
    name : 'Vijay Vishwakarma',
    age : 27,
    gender : 'Male',
    phone : 999999999
}

let car = {
    name:'Ferrari',
    maxspeed:'500 km/hr',
    color:'red',
}

//Captain America
let cap = {
    firstName:'Steve',
    lastName:'Rogers',
    firends: ['tony','bucky','dr banner'],  //in object you can store array also
    age:102,
    isAvenger : true,//boolean also
    Address:{                   //object also
        State:'Manahattan',
        City:'New york'
    },
    sayHi:function(){                 // function can also store
        console.log('Capatian say HI!')
    }

}
//how to acceses the  object key valuse

// //Dot notation
// console.log(cap)
// console.log(cap.firstName)
// console.log(cap.isAvenger)

// // Bracket notation
// console.log(cap['firstName'])

// console.log(cap.Address.City)
// console.log('My best firends is ',cap.firends[0])

// how to access funtion in object 
// cap.sayHi() 

// for in loop ----> for obaject 
for(let key in cap){
    console.log('Key',key,'Value',cap[key])
}

// //how to update the key
// cap.isAvenger = false
// cap.firends[2] = 'Hulk'
// console.log(cap)

// //addition of properties
// cap.movies = ['first Avenger','age of ultron','civl war']
// console.log(cap)

// how to delete the properties
delete cap.age
console.log(cap)