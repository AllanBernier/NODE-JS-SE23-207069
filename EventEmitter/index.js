const EventEmitter = require('events')

const em = new EventEmitter();
/*
// CLIENT

em.on("maReponse", () => {
    console.log("Réponse")
})

em.on('monEvent', (myobject) => {
    console.log("Évenement déclenché par : " + myobject.name)
    em.emit("maReponse")
})

// SERVER

console.log("Début")
em.emit('monEvent', {name :"Allan"})
console.log("Fin")
*/

em.on("get-random", () => {
    const randomNumber = Math.random()
    em.emit("random-result", randomNumber)
})

em.on("random-result", (nombre) => {
    console.log("Nombre reçu :" + nombre)
})

em.emit('get-random')
