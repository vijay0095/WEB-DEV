//os module in Node js Module
const os = require("os")

console.log('system Architecture ' + os.arch()) //this print system architechtue
console.log('platfrom ' + os.platform()) //this print system platform
console.log( os.networkInterfaces()) //this print network interfaces
console.log(os.cpus()) //this print cpu information