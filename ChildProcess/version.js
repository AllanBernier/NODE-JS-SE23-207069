const {exec} = require("child_process")
const args = process.argv.splice(2)

if (args.length == 1){
    exec(args[0] + " --version", (err, stdout, stderr ) => {
        if (err){
            console.log("err :" + err)
            return
        }
    
        if (stderr){
            console.log("stderr :" + stderr)
            return
        }
    
        console.log(stdout)
    })
}
