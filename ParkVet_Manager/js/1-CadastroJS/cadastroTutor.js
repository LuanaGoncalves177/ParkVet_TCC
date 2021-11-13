var botao_cadastrar = document.querySelector("#botao-cadastrar-pet");

botao_cadastrar.addEventListener("click", function(event){
    event.preventDefault();

    var tutor = obtemInformacoesDoForm()
    var erros = validaDados(tutor);
    
    
    if (erros.length == 0){
        //Armazena.armazenaCliente(new Tutor(tutor));
        location.href = "./cadastrar-pets.html";
    }else{
        //exibeErro(erros);
        
        console.log(erros)
        
        return;
    }

    
});

function obtemInformacoesDoForm(){
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

function validaDados(tutor){
    var erros = [];

    if (!validaNome(tutor.nome)){
        erros.push("Erro Nome");
    }
    if (!validaEndereco(tutor.endereco)){
        erros.push("Erro Endereço");
    }
    if (!validaEmail(tutor.email)){
        erros.push("Erros Email");
    }
    if(!validaWhatsapp(tutor.whatsapp)){
        erros.push("Erros Whatsapp");
    }
    if(!validaTelefone(tutor.telefone)){
        erros.push("Erro Telefone");
    }


    return erros;
}


//Validações do Tutor
function validaNome(nomeTutor){
    if(nomeTutor == ""  ){
        return false;
    }
    return true;
}

function validaEndereco(enderecoTutor){
    //if(enderecoTutor.isNumber() ){
    //    return false;
    //}
    return true;
}

function validaEmail(email){

    return true;
}
function validaWhatsapp(whatsapp){
    if(whatsapp == ""){
        return false;
    }
    return true;
}

function validaTelefone(telefone){
    //if (!telefone.isNumber()) return false;
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