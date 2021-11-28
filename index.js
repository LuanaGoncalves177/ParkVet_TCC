const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require("./infraestrutura/Tabelas")



conexao.connect(erro => {
    if(erro){
        console.log("ERRO:" + erro)
    }else{
        console.log("Conectado com sucesso")
        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(4000,() => console.log("Deu Certo"))

    }
})