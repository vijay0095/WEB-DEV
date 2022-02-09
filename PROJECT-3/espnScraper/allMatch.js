const request = require('request')
const cheerio = require('cheerio')
const ScorecardObj = require('./scoreCard')


function getAllMatchLink(uri) {

    request(uri, function (err, response, html) {//same method as upper
        if (err) {
            console.log(err)
        }
        else {
            extractAllMatchLink(html)// call function ..for all Matchs link
        }
    })

}
function extractAllMatchLink(html) {
    let $ = cheerio.load(html)// load into cheerio format

    let ScorecardEleArr = $('a[data-hover="Scorecard"]')//going one scorecard.. ant get inspect..and selct achor tag
    for (i = 0; i < ScorecardEleArr.length; i++) {/// for all type of scorecard which are in array
        let ScorecardLink = $(ScorecardEleArr[i]).attr('href')// for link

        let fullLink = 'https://www.espncricinfo.com' + ScorecardLink
        // console.log(fullLink)// getting one by one all score card link 

        ScorecardObj.ps(fullLink)

    }

}

module.exports = {
    getAllMatch: getAllMatchLink
}