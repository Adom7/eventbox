const fs = require ('fs');  // pour utiliser fs.

let chemin = __dirname
let pathe = fs.readdirSync(chemin)
let regex = /^[\t ]*function/gm

for (let i = 0; i < pathe.length; i++) {
    const file = pathe[i];
if (file.endsWith('.js')) {
    let data =  fs.readFileSync(file,'utf8')
    console.log(data.match(regex))

    
    //console.log(file)     // ^[\t ]*function de recherche ?

}
}
console.log('boucle for fini')

