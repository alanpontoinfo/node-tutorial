const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const primeiro = readFileSync('./conteudo/primeiro.txt', 'utf8')

const segundo = readFileSync('./conteudo/segundo.txt', 'utf8')

console.log(primeiro, segundo)

writeFileSync(
  './conteudo/resultado-sync.txt',
  `Aqui está o resultado: ${primeiro}, ${segundo}`,
  { flag: 'a' }
)
console.log('feito com esta tarefa')
console.log('iniciando uma proxima')
