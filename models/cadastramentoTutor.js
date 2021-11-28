const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class CadastramentoTutor{

    adiciona(info, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(info.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = info.cliente.length >= 5

        const validacoes = [
            {
                nome: data,
                valido: dataEhValida,
                mensagem:'Data Invalida'
            },
            {
                nome: 'Cliente',
                valido: clienteEhValido,
                mensagem: "Nome do Cliente invalido"
            }
        ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros){
        res.status(400).json(erros)
    }else{
        const cadastramentoDatado = {...info, dataCriacao, data}
        const sql = 'INSERT INTO Tutor SET ? '

        conexao.query(sql, cadastramentoDatado, (erro,resultados) =>{
            if(erro){
                res.status(400)
            }else{
                res.status(201)
            }
        })
    }
    }
    
    deleta(id, res){
        const sql = 'DELETE FROM Tutor WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400)
            }else{
                res.status(200)
            }
        })
    }

    altera(id, valores,res){
        if(valores.data){
            valores.data = moment(valores.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Tutor SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if(erro){
                res.status(400)
            }else{
                res.status(200)
            }

        })
    }
}

module.exports = new CadastramentoTutor