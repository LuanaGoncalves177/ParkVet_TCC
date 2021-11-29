 const conexao = require('../infraestrutura/conexao')
 const moment = require('moment')
 const db = require('../models/bd')

    const adicionatutor = db.sequelize.define("tutor", {
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
            type: db.Sequelize.INTEGER
        },
        telefoneFixo:{
            type: db.Sequelize.INTEGER
        },
        autorizacao: {
            type: db.Sequelize.STRING
        }
    })
 module.exports = tutor;

// class CadastramentoTutor{

//     adiciona(info, res){
//         const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        
    
//         const cadastramentoDatado = {...info, dataCriacao}
//         const sql = 'INSERT INTO Tutor ((idTutor int NOT NULL AUTO_INCREMENT, nomeTutor varchar(50) NOT NULL, endereco varchar(30), email varchar(30), whatsApp int NOT NULL, telefoneFixo int, autorizacao varchar(20), dataCriacao datetime NOT NULL, PRIMARY KEY(idTutor)) SET ?'
//         console.log(cadastramentoDatado)
//         conexao.query(sql, cadastramentoDatado, (erro,resultados) =>{
//             if(erro){
//                 res.status(400)
//             }
//         })
        
//     }
    
    
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

// module.exports = new CadastramentoTutor

