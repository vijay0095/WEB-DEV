function add(a,b){
    console.log('the sum is ',a+b)
}

function sub(a,b){
    console.log('the difference is ',a-b)
}

function mul(a,b){
    console.log('the product is ',a*b)
}

function div(a,b){
    console.log('the quotient is ',a/b)
}

module.exports = {
    Addition : add,
    Substraction : sub,
    Multiply : mul,
    Division : div
}

// module.exports is a Objest provided by Node.js by which we can
//  export our function in key value pair
// we will use our function with the key we have assigned to them
