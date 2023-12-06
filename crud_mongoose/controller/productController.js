
let Product = require("../model/product")
let methods = {}

methods.findById = (req, res) => {
    Product.findById(req.params.id)
    .then( (queryResult) => { res.json(queryResult) })
    .catch( (err) => { res.status(404).send("Product not found")})
}

methods.getAll = (req, res) => {
    Product.find()
    .then((queryResult) => { res.json(queryResult) } )
}

methods.store = (req, res) => {

    Product.create(req.body)
    .then( (queryResult) => { res.status(201).json(queryResult)})
}

methods.update = (req, res) => {
    Product.updateOne({_id : req.params.id  }, req.body)
    .then( (queryResult) => {         
        if (queryResult.modifiedCount == 1){
            return res.send("Product updated") 
        } else if (queryResult.matchedCount == 0) {
            return res.status(404).send("Product not found") 
        } else {
            return res.status(403).send("Product not updated") 
        }
    })
    .catch( (err) => {
        return res.status(403).send("Unknown id") 
    })
}

methods.destroy = (req,res) => {
    let id = req.params.id
    Product.deleteOne({_id : id  })
    .then( (queryResult) => { 
        console.log(queryResult)
        res.send("Product deleted")
    })
}

module.exports = methods