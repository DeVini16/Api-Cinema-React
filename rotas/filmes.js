const { Router } = require('express');
const { getFilmes, getFilme, postFilme, deleteFilme} = '../controllers/controllerFilmes.js'

const router = Router()

router.get('/', getFilmes)

router.get('/:id', getFilme)

router.post('/', postFilme)

router.delete('/:id', deleteFilme)

module.exports = router