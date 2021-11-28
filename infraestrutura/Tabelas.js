class Tabelas{
    init(conexao){
        this.conexao = conexao
        console.log('Tabelas foram chamadas')
        this.criarTabelaTutor()
        this.criarTabelaPet()
        this.criarTabelaServicoContratado()
    }

    criarTabelaTutor(){
        const sql = 'CREATE TABLE IF NOT EXISTS Tutor (idTutor int NOT NULL AUTO_INCREMENT, nomeTutor varchar(50) NOT NULL, endereco varchar(30), email varchar(30), whatsApp int NOT NULL, telefoneFixo int, autorizacao varchar(20), dataCriacao datetime NOT NULL, PRIMARY KEY(idTutor))'

        this.conexao.query(sql,(erro)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Tutor criada com sucesso')
            }

        })
    }

    criarTabelaPet(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pet (idPet int NOT NULL AUTO_INCREMENT, nomePet varchar(50) NOT NULL, raca varchar(30), especie varchar(30), pelo varchar(15), porte varchar(15), sexo varchar(15), dataCriacao datetime NOT NULL, PRIMARY KEY(idPet), FOREIGN KEY (idTutor))'
        
        this.conexao.query(sql,(erro)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Pet criada com sucesso')
            }

        })

    }

    criarTabelaServicoContratado(){
        const sql = 'CREATE TABLE IF NOT EXISTS ServicoContratado (idServicoContratado int NOT NULL AUTO_INCREMENT, FOREING KEY(idPet), FOREIGN KEY(idTutor), servicoContratado varchar(40), dataServico datetime, total float)'
        
        this.conexao.query(sql,(erro)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Servico contratado criada com sucesso')
            }

        })
    }
}

module.exports = new Tabelas