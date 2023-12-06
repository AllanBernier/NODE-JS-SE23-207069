
const myPromise= () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (Math.random() > 0.5){
                resolve("Opération réussie !")
            } else {
                reject("Opération échouée !")
            }
        }, 1000)
    })
}

/**myPromise()
.then( (msg) => {
    console.log(msg)
})
.catch( (err) => {
    console.log(err)
})
 */

const main = async () => {
    const reponse = await myPromise();
    console.log(reponse)
    
}


main();




