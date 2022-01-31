//how yo import the child process Module
//child process module is a node module which are used to create the sub process inside process
const cp = require('child_process')

// console.log('We are trying to open the calcultor')
// cp.execSync('calc')
// console.log('calcultor open')

// console.log('We are trying to open the vscode')
// cp.execSync('code')
// console.log('vscode open')

let output = cp.execSync('node test.js')
console.log('output : ' + output)
