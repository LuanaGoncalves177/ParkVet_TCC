var botao_salvar = document.querySelector("#botao-salvar")
var bota_adiciona = document.querySelector("#adiciona")

bota_adiciona.addEventListener("click", function(event){
    var div = document.querySelector("#campo__servico")

    div.innerHTML = '<input list="servicos_disponiveis"/>'

})



botao_salvar.addEventListener("click", function(event){
    event.preventDefault();

    var servicoPet = obtemInformacoesDoFormServicos()
    var erros = validaDadosServicos(servicoPet)
        
        if (erros.length == 0){
            //Armazenar infomações
            location.href= "../3-Agendamentos/agendamento-agendados.html" 
            //console.log(servicoPet)
        }else{
            alert(erros)
            return;
        }
})

function obtemInformacoesDoFormServicos(){
    var servico = {
        nomeTutor: document.querySelector("#tutor-nome").value,
        nomePet: document.querySelector("#pet-nome").value,
        servicoSelecionado: document.querySelector("#servico-opcao").value,
        dataServico: document.querySelector("#data_servico").value,
        horaServico: document.querySelector("#horario_servico").value,
        valorTotal: document.querySelector("#input_valor").value
    }

    return servico
}

function validaDadosServicos(servicoPet){
    var erros = [];

    if(!validaNomeServicoPet(servicoPet.nomePet)){
        erros.push("Erro: Selecione um pet")
    }
    if (!validaServico(servicoPet.servicoSelecionado)){
        erros.push("Erro: Selecionar Serviço")
    }
    //if(!validaDataServico(servico.dataServico))
    //if(!validaHorarioServico(servico.horaServico))

    return erros;
}

//Validações do Servico
function validaNomeServicoPet(nomePet){
    if(nomePet == ""){
        return false;
    }
    return true;
}
function validaServico(servicoSelecionado){
    if (servicoSelecionado == ""){
        return false;
    }
    return true;
}