const request = require('request');//request module

console.log('Before')

request('https://www.worldometers.info/coronavirus/', cb)
function cb(error, response, body) {// website link where the data,callback function
    // (error,response-->statuscode,body-->HTML data)
    
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the worldometer homepage.
    
    }

console.log('After')
