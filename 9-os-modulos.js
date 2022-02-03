const os = require('os')

// informacao sobre atual usuario

const user = os.userInfo()
console.log(user)

//metodo que retorna o sistema de relogio em segundos

console.log(`O sistema Uptime é ${os.uptime()} seconds`)

const currentOS = {
  nome: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
