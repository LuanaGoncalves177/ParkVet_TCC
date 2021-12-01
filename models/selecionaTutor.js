const { Sequelize } = require('../models/bd')
const db = require('../models/bd')
const {QueryTypes} = require('sequelize')

    class Seleciona{
        
        static async selecionaTutor(req, res){
            const {nomeTutor} = req.params
            try {
                const tutorCadastrado = await parkvet.tutors.findOne({
                    WHERE:{
                        nomeTutor:nomeTutor
                    }
                })
                return res.status(200).json(tutorCadastrado)
            } catch (error) {
                
            }
        }

        async buscaIdTutor(){
            try{
                const idtutor = await parkvet.tutors.query(
                    ' SELECT * FROM tutors WHERE id=(SELECT max(idTutor) FROM tutors)',
                    {
                        replacements: { status: ['active', 'inactive'] },
                        type: QueryTypes.SELECT
                })
                const idTutorJson = JSON.parse()
                return idtutor.json()
            } catch (error) {
                return error
            }

                
        }
    }



module.exports = Seleciona