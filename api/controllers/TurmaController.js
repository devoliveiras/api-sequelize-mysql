const  database = require('../models')
const sequelize = require('sequelize')
const Op = sequelize.Op 

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}

        //Verifica se foram inseridos parametros Query Parameters
        data_inicial || data_final ? where.data_inicio = {} : null 
        //Se foi, faz o filtro entre data inicial e final
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null

        try{
            const todasAsTurmas = await database.Turmas.findAll({ where })
            return res.status(200).json(todasAsTurmas)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    // {
    //     where: {
    //         data_inicio:  {
    //             [Op.gte]: data,
    //             [Op.lte]: data
    //         }
    //     }
    // }

    static async pegaUmaTurma(req,res) {
        const { id } = req.params
        try{
            const umaTurma = await database.Turmas.findOne( {where: { id: Number(id) }} )
            return res.status(200).json(umaTurma)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body
        try{
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res){
        const { id } = req.params
        const novasInfos = req.body

        try{
            await database.Turmas.update(novasInfos, { where : { id: Number(id) } })
            const turmaAtualizada = await database.Turmas.findOne( {where: { id: Number(id) }} )
            return res.status(200).json(turmaAtualizada)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
 
    }

    static async deletarTurma (req, res){
        const { id } = req.params

        try{
            await database.Turmas.destroy( {where: { id: Number(id) }}  )
            return res.status(200).json({ message: `Registro id: ${id} deletado com sucesso.` })
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async restauraTurma (req, res) {
        const { id } = req.params
        try{
            await database.Turmas.restore( { where: { id: Number(id) } } )
            return res.status(200).json({ mensagem: `Registro ${id} restaurado com sucesso.` })
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmaController