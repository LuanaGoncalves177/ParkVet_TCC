const { Sequelize } = require('../models/bd')
const db = require('../models/bd')

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

}

module.exports = Seleciona