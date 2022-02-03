const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./conteudo/primeiro.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const primeiro = result
  readFile('./conteudo/segundo.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const segundo = result
    writeFile(
      './conteudo/resultado-async.txt',
      `Aqui esta o resultado : ${primeiro}, ${segundo}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('feito com esta tarefa')
      }
    )
  })
})

console.log('iniciando proxima tarefa')
