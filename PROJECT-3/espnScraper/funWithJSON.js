const fs = require("fs")

// require the xlsx lib too create the worksheeeet 
const xlsx = require('xlsx')

//require JSON file name ,,
let data = require('./example.json')

//****************ALternate  form****************** */
// let buffer = fs.readFileSync("./example.json")
// console.log(buffer)

// let data = JSON.parse(buffer)//convert buffer into data into JSON fromat 
// console.log(data)
//********************************************************* */

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

//******************write on excel************************* */
function excelWritter(filePath, jsonData, sheetName) {
    let newWB = xlsx.utils.book_new(); //create the new work book type xlsx
    let newWS = xlsx.utils.json_to_sheet(jsonData);// create the new work sheet 
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName); //it take JSON file and append in sheet
    xlsx.writeFile(newWB, filePath);//write the sheet in abc file name

}

//read data from xlsx
function excellReader(filePath, sheetName) {
    //check required
    if(fs.existsSync(filePath)==false){
        return[]
    }
    let wb = xlsx.readFile(filePath);// whicht file to read
    let excelData = wb.Sheets[sheetName];//pass the sheet name
    let ans = xlsx.utils.sheet_to_json(excelData)//convert the shet in JSON
    return ans
}
