var botao_cadastrar = document.querySelector("#botao-cadastrar-pet");

botao_cadastrar.addEventListener("click", function(event){
    event.preventDefault();

    var formularioCliente = document.querySelector(".formulario__cliente");

    var tutor = obtemInformacoesDoForm(formularioCliente);
    
    erros = validaDados(tutor);

    if (erros.length == 0){
        location.href = "./cadastrar-pets.html";
        //tutor = new Tutor(1,tutor.nome,tutor.endereco, tutor.email, tutor.whatsapp,tutor.telefone,tutor.autorizacao_mensagens);
    }else{
        exibeErroTutor();
        return;
    }

    
});

function obtemInformacoesDoForm(formularioCliente){
    var tutor = {
        nome: formularioCliente.nomeTutor.value,
        endereco: formularioCliente.enderecoTutor.value,
        email: formularioCliente.emailTutor.value,
        whatsapp: formularioCliente.whatsappTutor.value,
        telefone: formularioCliente.telefoneTutor.value,
        autorizacaoMensagens: formularioCliente.autorizacaoTutor.value
    }
    return tutor;
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
        erros.push("Erros Whasapp");
    }
    if(!validaTelefone(tutor.telefone)){
        erros.push("Erro Telefone");
    }


    return erros;
}


//Validações do Tutor
function validaNome(nomeTutor){
    if(nomeTutor == "" || nomeTutor.isNumber() ){
        return false;
    }
    return true;
}

function validaEndereco(enderecoTutor){
    if(enderecoTutor.isNumber() ){
        return false;
    }
    return true;
}

function validaEmail(email){

    return true;
}
function validaWhatsapp(whatsapp){
    if(whatsapp == "" || !whatsapp.isNumber() ){
        return false;
    }
    return true;
}

function validaTelefone(telefone){
    if (!telefone.isNumber()) return false;
    return true;
}

function exibeErro(erros){
    var ul = document.querySelector("#mensagens-de-erro-tutor");
    ul.innerHTML= "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    return ;
}