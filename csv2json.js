//Correction Dylan voir enregistrement Teams

const fs = require('fs')
const readline = require('readline')

function csv2json(filename) {
  const input = fs.createReadStream(filename)
  const rl = readline.createInterface({ input })

  let lineCount = 0

  rl.on('line', (line) => {
    if (lineCount === 0) {
      // Header   // Regex grouper tout les words avec ; comme separation ?   
      //debut regex [\S]*() get the whole line
      // il faut créer plusieurs groupes pour tirer tout sauf les ;
      // [^;]+ get everything except ; (no groups made only full match)
        



      // Correction, Regex n'est pas la solution, utiliser rl.split
    } else {
      // Data

    }
    
    console.log(`line(${lineCount}):`, line)
    lineCount++
  })
}

/**
 * Entrypoint
 */
csv2json('Comp0ser.csv')