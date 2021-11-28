var botao_login = document.querySelector(".formulario__button");

botao_login.addEventListener("click", KeyboardEvent, function(event){
    event.preventDefault(); 
    
    var idLogin = document.querySelector("#id");
    var senhaLogin = document.querySelector("#senha");
    
    var id = idLogin.value;
    var senha = senhaLogin.value;

    var erros = validaLogin(id, senha);

    if(erros.length == 0){
        location.href = "./3-Agendamentos/agendamentos.html";
    }else{
        exibeErro(erros);
        return;
    }

    idLogin.reset();
    var mensagensErro = document.querySelector("#mensagens-de-erro");
    mensagensErro.innerHTML = "";
});

function validaLogin(id, senha){
    var erros = [];
    
    if(id != 100){
        erros.push("Id invalido");
    }

    if (senha != 33552){
        erros.push("Senha invalida");
    }

    
    return erros;

}

function exibeErro(erros){
    var ul = document.querySelector("#mensagens-de-erro");
    ul.innerHTML= "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    return 
}