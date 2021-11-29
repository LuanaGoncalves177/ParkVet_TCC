var botao_cadastrar = document.querySelector("#botao-cadastrar-pet");


botao_cadastrar.addEventListener("click", function(event){
    event.preventDefault();

    var tutor = obtemInformacoesDoFormTutor()
    var erros = validaDadosTutor(tutor);
    
    
    if (erros.length == 0){
        //Armazena.armazenaCliente(new Tutor(tutor));
        
        //location.href = "./cadastrar-pets.html";
    }else{
        //exibeErro(erros);
        console.log(erros)
        return;
    }

    
});

function obtemInformacoesDoFormTutor(){
    var tutor = {
        nomeTutor: document.querySelector('#tutor-nome').value,
        endereco: document.querySelector('#tutor-endereco').value,
        email: document.querySelector('#tutor-email').value,
        whatsapp: document.querySelector('#tutor-whatsapp').value,
        telefone: document.querySelector('#tutor-telefone').value,
        autorizacaoMensagens: document.querySelector('#autorizacao').value
    }
    return tutor

}

function validaDadosTutor(tutor){
    var erros = [];

    if (!validaNome(tutor.nomeTutor)){
        erros.push("Erro Nome");
    }
    if (!validaEndereco(tutor.endereco)){
        erros.push("Erro Endereço");
    }
    if (!validaEmail(tutor.email)){
        erros.push("Erro Email");
    }
    if(!validaWhatsapp(tutor.whatsapp)){
        erros.push("Erro Whatsapp");
    }
    if(!validaTelefone(tutor.telefone)){
        erros.push("Erro Telefone");
    }


    return erros;
}


//Validações do Tutor
function validaNome(nomeTutor){
    if(nomeTutor == "" || typeof nomeTutor == "number"){
        return false;
    }
    return true;
}

function validaEndereco(enderecoTutor){
     if(typeof enderecoTutor == "number" || enderecoTutor == ""){
         return false;
     }
    return true;
}

function validaEmail(email){
    
    return true;
}
function validaWhatsapp(whatsapp){
    if(typeof whatsapp == "number" || !whatsapp == ""){
       return true;
    }
    return false;
}

function validaTelefone(telefone){
    //if (typeof telefone == "number") return true;
    return true;
}
/*
function exibeErro(erros){
    var ul = document.querySelector("#mensagens-de-erro-tutor");
    ul.innerHTML= "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}*/