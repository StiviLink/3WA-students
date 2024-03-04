import fs from "node:fs"

fs.writeFileSync("test.txt", "Ceci est juste un test", err =>{
    if(err) console.error(err)
})

console.log(fs.readFileSync("test.txt", {encoding: 'utf8'}))