
const productRequest = (req, res, next) => {

    if ( req.body.name != undefined && req.body.price != undefined){
        return next();
    }

    res.status(403).send("Price or Name not fill")

}

module.exports = productRequest