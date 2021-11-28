var botao_pagamento = document.querySelector("#botao-pagamento")
var botao_adiciona = document.querySelector("#adiciona")

botao_adiciona.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.querySelector("#campo__servico")

    var listServicos = document.createElement('input')
    listServicos.setAttribute("list", "servicos_disponiveis")
    listServicos.classList.add("servico-opcao")
    div.appendChild(listServicos)
})



botao_pagamento.addEventListener("click", function(event){
    event.preventDefault();

    var servicoPet = obtemInformacoesDoFormServicos()
    var erros = validaDadosServicos(servicoPet)
        
        if (erros.length == 0){
            //Armazenar infomações
            location.href= "../3-Agendamentos/agendamento-agendados.html" 
            //console.log(servicoPet)
        }else{
            alert(erros)
            console.log(servicoPet)
            return;
        }
})

function obtemInformacoesDoFormServicos(){
    var servico = {
        nomeTutor: document.querySelector("#tutor-nome").value,
        nomePet: document.querySelector("#input-pet-nome").value,
        servicoSelecionado: document.querySelector("#servico-opcao").value,
        dataServico: document.querySelector("#data_servico").value,
        horaServico: document.querySelector("#horario_servico").value,
        valorTotal: document.querySelector("#input-valor-total").value
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