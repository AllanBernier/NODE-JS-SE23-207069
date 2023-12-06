const methods = {}

let score = {
    win : 0,
    lose : 0,
    tie : 0
}


methods.update = (req, res) => {
    score.win = Number(req.params.win)
    score.lose = Number(req.params.lose)
    score.tie = Number(req.params.tie)

    return res.json(score)
}

methods.restart = (req, res) => {
    score.win = 0
    score.lose = 0
    score.tie = 0
    
    return res.json(score)
}

const listPlay = ["pierre", "feuille", "sciseaux"]


methods.imaMiddleWare = (req,res,next) => {
    console.log("In middleWare")

    next();
}


methods.getScore = (req, res) => {

    console.log("in Get Score")

    return res.json(score)
}

methods.play = (req, res) => {

    const action_joueur = req.params.action
    const index_action_joueur = listPlay.indexOf(action_joueur)

    const index_action_server = Math.floor(Math.random() * 3)
    const action_server = listPlay[index_action_server]

    let result = ""
    if (index_action_joueur == index_action_server){
        result = "égalité"
        score.tie++
    } else {

        if ( (index_action_joueur + 1 ) % 3 == index_action_server ){
            result = "défaite"
            score.lose ++
        } else {
            result = "victoire"
            score.win ++
        }
    }

    res.send("Vous avez joué " + action_joueur + ", le serveur a joué "+ action_server + " vous avez fait " + result)
}

module.exports = methods