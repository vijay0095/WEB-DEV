//Help function will provide the list of all commands which  we run the in this project
function helpFn(){
    console.log(`List of all Commands ---->
                            1) Tree     -> node FO.js tree <dirPath>
                            2) Organize -> node FO.js organize <dirPath>
                            3) Help     -> node FO.js help`)
}

module.exports = {
    helpFnKey : helpFn
}