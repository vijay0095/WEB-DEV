const request = require('request')// to request the data form the website

const cheerio = require('cheerio')//for meaningful data from html

console.log('Before')

request('https://www.worldometers.info/coronavirus/',cb)
function cb (err, response , html){
    if(err){
        console.log(err)
    }
    else{
        // comsole.log('Status : ' , response && response.statusCode)
        handelHtml(html)
    }
}

function handelHtml(html){
    let selTool = cheerio.load(html)//seltool is cantians whole html data in cheerio format
    // console.log(selTool)

    let contentArr = selTool('.maincounter-number span')
    // for( i = 0; i<contentArr.length; i++){
    //     let data  =  selTool(contentArr[i]).text()
    //     console.log(data)
    // }

    let totalCases = selTool(contentArr[0]).text()
    let totalDeaths = selTool(contentArr[1]).text()
    let totalRecovered = selTool(contentArr[2]).text()

    console.log('Total cases ---> ' + totalCases)
    console.log('Total deaths ---> ' + totalDeaths)
    console.log('Total Recovered ---> ' + totalRecovered)

}

console.log('After')
