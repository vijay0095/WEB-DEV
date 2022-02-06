//last ball commentary.. using web scraping...

const request = require('request')
const cheerio = require('cheerio')

//request the html
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary',cb)
function cb(err,response,html){
    if(err){
        comsole,log(err)
    }
    else{
        helperHtml(html)
    }
}

function helperHtml(html){
    let selTool = cheerio.load(html)// cheerio format'

    let contentArr = selTool('.d-flex.match-comment-padder.align-items-center .match-comment-long-text')
    let lbc = selTool(contentArr[0]).text()
    console.log('Last ball comnetry--> '+ lbc)
}