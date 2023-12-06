
const play = (value) => {
    let resp = ""

    if (value % 3 == 0){
        resp += "fizz"
    }
    if (value % 5 == 0){
        resp += "buzz"
    }

    return resp == "" ? value : resp
}

module.exports = {
    play
} 