const {spawn} = require("child_process")

let args = process.argv.splice(2)

let add = spawn('git add *')

let commit = {}
add.stdout.on('data', data => {
    commit = spawn('git commit', ['-m', args[0]])

})

commit.stdout.on('data', data => {
    spawn('git push')
})

