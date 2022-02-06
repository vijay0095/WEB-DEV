url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/live-cricket-score'

const request = require('request')
const cheerio = require('cheerio')

request(url, function(err,response,html){
    if(err){
        console.log(err)
    }
    else{
        extractMatchdetail(html)
    }
})

function extractMatchdetail(html){
    let $ = cheerio.load(html)

    let decrElem = $('.header-info .description')
    // console.log(decrElem.text())
    let decrElemArr = decrElem.text().split(',')
    // console.log(decrElemArr)
    let Venue = console.log('Match Venue --> ' + decrElemArr[1].trim())
    let Date = console.log('Match date --> '+ decrElemArr[2].trim())

    let resultarr = $('.match-info.match-info-MATCH.match-info-MATCH-half-width span')
    let Matchresult = $(resultarr).text()
    console.log('Match Result --> '+ Matchresult)

}