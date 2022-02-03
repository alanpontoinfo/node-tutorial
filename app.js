// npm -  comando global, vem com node
// npm --version

// dependencia local - use- o somente neste projeto particular
// npm i <NomedoPacote>

// dependencia global - use o em qualquer projeto
// npm install -g <NomedoPacote>
// sudo install -g <NomedoPacote> (mac)

//package.json -manifest file (armazena importante informacao sobre project/package)
// abordagem manual ( cria package.json na raiz (root), cria propriedades etc)
// npm init ( passo a passo, pressione enter para pular)
// npm init -y (tudo padrao)

const _ = require('lodash')

const itens = [1, [2, [3, [4, [5]]]]]
const novosItens = _.flattenDeep(itens)

console.log(novosItens)
