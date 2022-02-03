const http = require('http')

const server = http.createServer((req, res) => {
  //console.log(req)
  if (req.url === '/') {
    res.end('Bem vindo a nossa home page')
  } else if (req.url === '/about') {
    res.end('Aqui esta nossa curta historia')
  } else {
    res.end(`
     <h1>Opss</h1>
    <p>Nao podemos encontrar a pagina</p>
    <a href="/">Retornar a home page</a>`)
  }
})

server.listen(5000, console.log('estou conectado'))
