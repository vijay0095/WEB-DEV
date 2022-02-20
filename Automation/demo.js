const puppeteer = require("puppeteer")

console.log("before")

//launch returns a promises to open the browser
let browserWillLaunchPromises = puppeteer.launch({
    headless : false, // to show the Cromium website
    args: ["--start-maximized"],
    defaultViewport:null// show the new tab  in full screen
})

browserWillLaunchPromises.then(function(browserInstance){
    // console.log("Browser Opened")
    let newTabPromise = browserInstance.newPage()
    //newpage will open new tab in the browser
    return newTabPromise
}).then(function(newTab){
    // console.log("new tab opened")
    let websiteWillopenPromise = newTab.goto("https://www.pepcoding.com/")//to work on website orr open link"""
    return websiteWillopenPromise
}).then(function(){
    console.log("pepcodeing website will opened")
})

console.log("After")
