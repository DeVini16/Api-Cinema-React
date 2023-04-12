const { getTodosFilmes, getFilmesId } = require('../services/serviceFilmes');

function getFilmes(req, res){
  try{
    const maisFilmes = getTodosFilmes();
    res.send(maisFilmes);
  }catch(error) {
    res.status(500)
    res.send(error.massage);
  }
}

function getFilme(req, res){
  try{
    const id = req.params.id;
    const filme = getFilmesId(id)
    res.send(filme);
    
  }catch(error) {
    res.status(500)
    res.send(error.massage)
  }
}

function postFilme(req, res) {
  try {
    const filmeNovo = req.body
    insereFilme(filmeNovo)
    res.status(201)

  }catch(error) {
    res.status(500)
    res.send(error.massage)
  }

}

function deletarFilme(req, res) {
  try{
      const id = req.params.id;
      const filme = deletarFilme(id)
      res.send(filme);
  }catch(error){
    res.status(500)
    res.send(error.massage)
  }
}
module.exports = { 
  getFilmes,
  getFilme,
  postFilme,
  deletarFilme
} 