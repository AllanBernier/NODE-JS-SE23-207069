
let Product = require("../model/product")
let methods = {}


methods.findById = async (req, res) => {
    let product = await Product.findByPk(req.params.id)
    
    if (product != null){
        return res.json(product)
    }
    return res.status(404).send("Product not found")
}

methods.getAll = async(req, res) => {
    let products = await Product.findAll()

    res.render('index', {products : products})    
}

methods.create = (req, res) => {
    res.render('create')
}

methods.store = async(req, res) => {
    await Product.create(req.body)

    res.redirect('/product')
}

methods.edit = async (req, res) => {
    let product = await Product.findByPk(req.params.id)
    res.render('edit', {product : product})
}

methods.update = async(req, res) => {
    await Product.update(req.body, { where : {id : req.params.id }})
    res.redirect('/product')
}

methods.destroy = async (req,res) => {
    await Product.destroy({ where : {id : req.params.id}})
    res.redirect('/product')
}


module.exports = methods


/*

show -> page 
index -> page
create -> page
store
destroy
edit -> page
update

*/


