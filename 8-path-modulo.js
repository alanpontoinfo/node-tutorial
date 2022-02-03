const path = require('path')

console.log(path.sep)

const filePath = path.join('/conteudo', 'subpasta', 'test.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'conteudo', 'subpasta', 'test.txt')

console.log(absolute)
