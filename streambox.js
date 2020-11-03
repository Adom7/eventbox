// CORRECTION Dylan

const fs = require('fs')
const path = require('path')
const { Transform } = require('stream')

function duplicate(filename) {
  const { name, ext } = path.parse(filename)

  const readStream = fs.createReadStream(filename)
  const writeStream = fs.createWriteStream(`${name}.copy${ext}`)

  readStream.pipe(writeStream)
}

function transform(filename, re, fn, in_stdout = true) {
    
  const transformer = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().replace(re, fn))

      callback()
    }
  })

  const readStream = fs.createReadStream(filename)
  if (in_stdout == true) {                               // Modif perso If and Else et in_stdout = true dans les parametres
    readStream
    .pipe(transformer)
    .pipe(process.stdout)
  }
  else {

  }
}

function csv2json (filename) {      //Exo 6
  const { name} = path.parse(filename)
  const readStream = fs.createReadStream(filename)
  const writeStream = fs.createWriteStream(`${name}.json$`)
  readStream.pipe(writeStream)
}

module.exports = {
  duplicate,
  transform,
}

//