//import path module
const path = require('path')

let filepath = 'C:\\Users\\VIJAY VISHWAKARMA\\Desktop\\M.tech\\WEB-DEV\\Node js\\1.txt'
let extensionName = path.extname(filepath)//this will print extension name
console.log(extensionName)

let filename = path.basename(filepath) //this will print fullname
console.log(filename)

console.log(__dirname)//provide path name
console.log(__filename)