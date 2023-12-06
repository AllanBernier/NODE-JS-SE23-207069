
let Product = require("../model/product")
let methods = {}


methods.findById = async (req, res) => {
    let product = await Product.findByPk(req.params.id)
    
    if (product != null){
        return res.json(product)
    }
    return res.status(404).send("Product not found")
}

methods.getAll = (req, res) => {
    Product.findAll()
    .then((queryResult) => { res.json(queryResult) } )
}


methods.store = (req, res) => {

    Product.create(req.body)
    .then( (queryResult) => { res.status(201).json(queryResult)})
}

methods.update = (req, res) => {
    Product.update(req.body, { where : {id : req.params.id }})
    .then( (queryResult) => {         
        if (queryResult[0] == 1){
            return res.send("Product updated")
        } else {
            return res.status(403).send("Unknown id") 
        }


    })
    .catch( (err) => {
        return res.status(403).send("Unknown id") 
    })
}

methods.destroy = async (req,res) => {
    await Product.destroy({ where : {id : req.params.id}})
    res.send("Product deleted")
}

module.exports = methods