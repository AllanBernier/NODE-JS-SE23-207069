const {spawn} = require("child_process")

const ls = spawn('ls', ['-l','-a'])

ls.stdout.on('data',(data) =>{
    console.log("out: "+ data)
})

ls.stderr.on('data',(data) =>{
    console.log("out: "+ data)
})