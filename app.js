const express = require('express');
const rotaFilme = require('./rotas/filmes')

app = express();

app.use('/filmes', rotaFilme)

app.use(express.json())

const port = 8000

app.listen(port, (req, res) => {
  console.log(`Rodando na porta: ${port}`)
})