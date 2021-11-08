class Tutor {

    constructor(idTutor,nomeTutor, endereco, email, whatsapp, telefone_fixo, autorizacao_mensagens){
        
        this.idTutor = idTutor
        this.nomeTutor = nomeTutor
        this.endereco = endereco
        this.email = email
        this.whatsapp = whatsapp
        this.telefone_fixo = telefone_fixo
        this.autorizacao_mensagens = autorizacao_mensagens

        deletaTutor(this)
        salvarTutor(this)
        alterarTutor(this)
        exibirInfoTutor(this)
        enviarInfomacaoDeServicos(this.autorizacao_mensagens)
    }
}

function deletaTutor(this){

}
function salvarTutor(this){

}
function alterarTutor(this){

}
function  exibirInfoTutor(this){
    
}

function enviarInfomacaoDeServicos(autorizacao_mensagens){
    if (this.autorizacao_mensagens){
        //Enviar mensagens sobre pacotes, pagamentos, servicos e agendamento
    }
}