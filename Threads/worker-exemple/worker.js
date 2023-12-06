const {parentPort} = require('worker_threads')

parentPort.postMessage("Intensive CPU Task Start")
let i = 0
while (i < Math.pow(10,10)){
    i++
}
parentPort.postMessage("Intensive CPU Task End")
