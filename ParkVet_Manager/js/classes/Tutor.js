class Tutor {

    constructor(tutor){
        
        this.nomeTutor = tutor.nomeTutor
        this.endereco = tutor.endereco
        this.email = tutor.email
        this.whatsapp = tutor.whatsapp
        this.telefone_fixo = tutor.telefone
        this.autorizacao_mensagens = tutor.autorizacaoMensagens

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