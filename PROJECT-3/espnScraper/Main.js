//Required url which want to web scraping
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"

//require module
const request = require('request')
const cheerio = require('cheerio')
//request url with callback function
request(url, cb)
//function for call back
function cb(err, response , html){
    if(err){
        console.log(err)
    }
    else{
        extractLink(html)
    }
}
//for extrcting link using cheerio ..load on $ in our system
function extractLink(html){
    let $ = cheerio.load(html)// $ having all htlm data in cheerio format
    
    let AchorEle = $('a[data-hover="View All Results"]')// select acnchor tag

    let Link = AchorEle.attr('href')//attr--->for attribute extracting in achor tag
    // console.log(Link)
    let fullLink = 'https://www.espncricinfo.com'+ Link//complete link 
    // console.log(fullLink)

    getAllMaatchLink(fullLink)// but we have to required all Matchs link so 
}
//taking url o veiwresult
function getAllMaatchLink(uri){

    request(uri, function(err,response,html){//same method as upper
        if(err){
            console.log(err)
        }
        else{
            extractAllMatchLink(html)// call function ..for all Matchs link
        }
    })

}
function extractAllMatchLink(html){
    let $ = cheerio.load(html)// load into cheerio format

    let ScorecardEleArr = $('a[data-hover="Summary"]')//going one scorecard.. ant get inspect..and selct achor tag
    for(i=0; i<ScorecardEleArr.length;i++){/// for all type of scorecard which are in array
        let ScorecardLink = $(ScorecardEleArr[i]).attr('href')// for link

        let ScorecardfullLink = 'https://www.espncricinfo.com' + ScorecardLink
        console.log(ScorecardfullLink)// getting one by one all score card link 
    }

}