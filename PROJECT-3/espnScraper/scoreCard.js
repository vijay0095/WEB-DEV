// url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const request = require('request')
const cheerio = require('cheerio')

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

            }

        }
        // console.log('**************************************************************************')

    }
    // console.log(htmlString)
}

module.exports = {
    ps: processScoreCard
}