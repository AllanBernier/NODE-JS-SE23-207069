const EventEmitter = require('events')


class ProductService extends EventEmitter {

    constructor() {
        super()
        this.products = [];
    }

    addProduct(product){
        this.products.push(product)
        this.emit('productAdded', product)
    }

    updateProduct(productId, productData){
        const product = this.products.find( (p) => p.id === productId)
        if (product){
            Object.assign(product, productData)
            this.emit('productUpdated', product)
        }
    }

    deleteProduct(productId){
        const index = this.products.findIndex( (p) => p.id === productId)
        if (index !== -1){
            const product = this.products.splice(index, 1)[0]
            this.emit('productDeleted', product)

        }
    }
}


/* FRONT */

const productService = new ProductService();

productService.on('productAdded', (product) => {
    console.log("Nouveau produit")
    console.log(product)
})

productService.on('productUpdated', (product) => {
    console.log("Nouveau mis à jour")
    console.log(product)
})

productService.on('productDeleted', (product) => {
    console.log("Produit supprimé")
    console.log(product)
})


productService.addProduct({
    id : 1,
    price : 12,
    name : "toto"
});

productService.updateProduct(1, {
    id : 1,
    price : 150,
    name : "Updated Product"
});

productService.deleteProduct(1);

