const fs = require("fs")

let buffer = fs.readFileSync("./example.json")
// console.log(buffer)

let data = JSON.parse(buffer)//convert buffer into data into JSON fromat 
// console.log(data)

//how to push data in JSON
data.push(
    {
        "name": "Thor",
        "last name": "Godison",
        "isAvenger": true,
        "age": 10000,
        "Address": {
            "Planet": "Asgaad"
        },
        "firends": [
            "Tony",
            "Brosce",
            "Bucky"
        ]
    }
)

console.log(data)
//to write the data in JSON using fs module
// first JSON data lies on string
let StrinigData = JSON.stringify(data)
fs.writeFileSync("./example.json", StrinigData)
console.log(data)
