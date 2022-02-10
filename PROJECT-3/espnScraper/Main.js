//Required url which want to web scraping
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"

//require module
const getAllMatchObj = require('./allMatch')
const request = require('request')
const cheerio = require('cheerio')

const fs = require('fs')

const path = require('path')
let iplPath = path.join(__dirname,'IPL') //__dirname give the path in which directory you work
dirCreator(iplPath)
//request url with callback function
request(url, cb)
//function for call back
function cb(err, response, html) {
    if (err) {
        console.log(err)
    }
    else {
        extractLink(html)
    }
}
//for extrcting link using cheerio ..load on $ in our system
function extractLink(html) {
    let $ = cheerio.load(html)// $ having all htlm data in cheerio format

    let AchorEle = $('a[data-hover="View All Results"]')// select acnchor tag

    let Link = AchorEle.attr('href')//attr--->for attribute extracting in achor tag
    // console.log(Link)
    let fullLink = 'https://www.espncricinfo.com' + Link//complete link 
    // console.log(fullLink)

    getAllMatchObj.getAllMatch(fullLink)// but we have to required all Matchs link so 

}

function dirCreator(filePath){
    if(fs.existsSync(filePath) == false){
        fs.mkdirSync(filePath)
    }
}
