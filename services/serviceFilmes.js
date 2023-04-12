const fs = require('fs');

function getTodosFilmes(){
  return JSON.parse(fs.readFileSync("filmes.json"));
}

function getFilmesId(id){
    

    const filmesFiltrado = filmes.filter( filme => filme.id === id)[0];
    return filmesFiltrado;
}

function insereFilme(filmeNovo) {
    const filmes = JSON.parse(fs.readFileSync("filmes.json"));

    const novaListaDeFilmes = [...filmes, filmeNovo ]

    fs.writeFileSync("filmes.json", JSON.stringify(novaListaDeFilmes))
}

function deletarFilmes(id){
    const filmes = JSON.parse(fs.readFileSync("filmes.json"));

    const filmesFiltroDelete = filmes.filter( filme => filme.id === id)
    return filmesFiltroDelete.splice(filmesFiltroDelete)

}

module.exports = { 
  getTodosFilmes, 
  getFilmesId,
  insereFilme,
  deletarFilmes
};