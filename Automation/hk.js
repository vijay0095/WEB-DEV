// to open hacker raank website using puppeteer""https://www.hackerrank.com/auth/login"
const loginLink = "https://www.hackerrank.com/auth/login"

const puppeteer = require("puppeteer")

let email = "lasoja9060@naluzotan.com"
let password = "123789456"

let page// golobal define

let browserLaunchPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args:["--start-maximized--"]

})

browserLaunchPromise.then(function(browserInstance){
    let newTabPromise = browserInstance.newPage()
    return newTabPromise
}).then(function(newTab){
    page = newTab// not reuired to retrun again and again
    let HkPromise = newTab.goto(loginLink)// goto will work only on newtab
    return HkPromise
}).then(function(){
    let emailtypePromise = page.type("input[id='input-1']" , email, {delay : 100})// type takes .. 
    // find the selector where want to type, what type, object during  typing to provied delay
    return emailtypePromise
}).then(function(){
    let passwordTypePromise = page.type("input[id='input-2']", password, {delay: 100})
    return passwordTypePromise
}).then(function(){
    let LoginButtonClickPromise = page.click("button[data-analytics='LoginPassword']")
    return LoginButtonClickPromise
})