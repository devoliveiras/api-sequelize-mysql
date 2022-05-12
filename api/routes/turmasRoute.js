const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.deletarTurma)

//Rota para restaurar registro deletados com soft delete
router.post('/turmas/:id/restaura', TurmaController.restauraTurma)

module.exports = router 