const db = require('../models/bd')

    const adicionatutor = db.sequelize.define("tutor", {
        idTutor:{
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //field: 'id'
        },
        nomeTutor:{
            type: db.Sequelize.STRING
        }, 
        endereco:{
            type: db.Sequelize.STRING
        },
        email: {
            type: db.Sequelize.STRING
        },
        whatsapp: {
            type: db.Sequelize.BIGINT(50)
        },
        telefoneFixo:{
            type: db.Sequelize.BIGINT(50)
        },
        autorizacao: {
            type: db.Sequelize.STRING
        },
        dataCriacao: {
            type: db.Sequelize.DATE
        }

    }, {
        timestamps: false
    })
 module.exports = adicionatutor;

   
//     deleta(id, res){
//         const sql = 'DELETE FROM Tutor WHERE id=?'

//         conexao.query(sql, id, (erro, resultados) => {
//             if(erro){
//                 res.status(400)
//             }else{
//                 res.status(200)
//             }
//         })
//     }

//     altera(id, valores,res){
//         if(valores.data){
//             valores.data = moment(valores.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
//         }
//         const sql = 'UPDATE Tutor SET ? WHERE id=?'

//         conexao.query(sql, [valores, id], (erro, resultados)=>{
//             if(erro){
//                 res.status(400)
//             }else{
//                 res.status(200)
//             }

//         })
//     }
// }


