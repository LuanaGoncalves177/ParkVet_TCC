class Servico {

    constructor(idServico, descricao, valorServico, taxidog){
        this.idServico = idServico
        this.descricao = descricao
        this.valorServico = valorServico
        this.taxidog = taxidog


        adicionarServico(this)
        deletarServico(this)
        alterarServico(this)
        exibirInfoServico(this)
        contratarTaxidog(this.taxidog)
    }
}


function adicionarServico(this){

}

function deletarServico(this){

}
function alterarServico(this){

}

function  exibirInfoServico(){
    
}

function contratarTaxidog(taxidog){
    //Tem que enviar infomações do cliente
    
    if (taxidog){
        //Enviar mensagem para funcionario taxidog
    }
}