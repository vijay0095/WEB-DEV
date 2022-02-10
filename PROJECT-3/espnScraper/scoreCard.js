// url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const request = require('request')
const cheerio = require('cheerio')

const path = require("path")
const fs = require('fs')

const xlsx = require('xlsx')

function processScoreCard(url) {
    request(url, cb)
}

function cb(err, response, html) {
    if (err) {
        console.log(err)
    }
    else {
        extractMatchdetail(html)
    }
}

function extractMatchdetail(html) {
    let $ = cheerio.load(html)

    let Result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span').text()

    let decrElem = $('.header-info .description')
    // console.log(decrElem.text())
    let decrElemArr = decrElem.text().split(',')
    // console.log(decrElemArr)
    let Venue = decrElemArr[1].trim()
    let Date = decrElemArr[2].trim()

    // console.log(Venue)
    // console.log(Date)
    // console.log(Result)


    console.log('........................................................................')

    let innings = $('.card.content-block.match-scorecard-table>.Collapsible')

    let htmlString = ''
    for (let i = 0; i < innings.length; i++) {
        htmlString += $(innings[i]).html()

        let TeamName = $(innings[i]).find('h5').text()
        TeamName = TeamName.split('INNINGS')[0].trim()
        // console.log(TeamName)

        let opponentIndex = i == 0 ? 1 : 0
        let opponentName = $(innings[opponentIndex]).find('h5').text()
        opponentName = opponentName.split("INNINGS")[0].trim()

        // console.log(opponentName)
        // console.log(Venue,Date,TeamName,opponentName,Result)
        console.log(`${Venue} | ${Date} | ${TeamName} | ${opponentName} | ${Result}`)
        console.log('--------------------------------------------------------------------')


        let cInnings = $(innings[i])
        let allRows = cInnings.find('.table.batsman tbody tr')

        for (let j = 0; j < allRows.length; j++) {
            let allCols = $(allRows[j]).find('td')

            let isWorthy = $(allCols[0]).hasClass('batsman-cell')
            if (isWorthy == true) {
                let playerName = $(allCols[0]).text().trim()
                let run = $(allCols[2]).text().trim()
                let ball = $(allCols[3]).text().trim()
                let fours = $(allCols[5]).text().trim()
                let sixses = $(allCols[6]).text().trim()
                let STR = $(allCols[7]).text().trim()

                console.log(`${playerName} | ${run} | ${ball} | ${fours} | ${sixses} | ${STR} |`)

                processPlayer(TeamName, playerName, run, ball, fours, sixses, STR, opponentName, Venue, Result,Date)

            }

            // processPlayer(TeamName, playerName, run, ball, fours, sixses, STR, opponentName, Venue, Result)

        }
        // console.log('**************************************************************************')

    }
    // console.log(htmlString)
}

function processPlayer(TeamName, playerName, run, ball, fours, sixses, STR, opponentName, Venue, Result,Date) {
    let teamPath = path.join(__dirname, "IPL", TeamName)

    dirCreator(teamPath)

    let filePath  = path.join(teamPath,playerName+'.xlsx')
    let content = excellReader(filePath,playerName)

    //making object 
    let playerNameaObj ={
        TeamName, playerName, run, ball, fours, sixses, STR, opponentName, Venue, Result,Date
    }
    content.push(playerNameaObj)
    excelWritter(filePath,content,playerName)

}

function dirCreator(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.mkdirSync(filePath)
    }
}
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

module.exports = {
    ps: processScoreCard
}