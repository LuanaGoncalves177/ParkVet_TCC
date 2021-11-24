var botaoFiltro = document.querySelector("#botao-filtrar");
var tabela = document.querySelector("#agenda")

botaoFiltro.addEventListener("click", function(event){
    event.preventDefault()
    var dataEscolhidaOriginal = document.querySelector("#data_servico").value;
    console.log(dataEscolhidaOriginal)
    var dataEscolhida = dataEscolhidaOriginal.split('-').reverse().join('/');
    console.log(dataEscolhida)
    
    var clientesAgendados = document.querySelectorAll(".clientes-agendados");
    console.log(clientesAgendados.length)
    for(var i=0; i < clientesAgendados.length; i++){
            
            var clienteAgendado = clientesAgendados[i];
            //console.log(clienteAgendado)
            var tdData = clienteAgendado.querySelector(".agenda__data");
            //console.log(tdData)
            var dataAgendada = tdData.textContent;
            var expressao = new RegExp(dataEscolhida, "i")
            
            if(!expressao.test(dataAgendada)){
                clienteAgendado.classList.add("invisivel");
            }else{
                clienteAgendado.classList.remove("invisivel");
            }
    }

});
var excluir = document.querySelectorAll(".agenda__excluir")

tabela.addEventListener("click", function(event){
    var elemento = event.target
    var comparaX = document.querySelector("#imagem_tabela-excluir") 
    var comparaT = document.querySelector(".agenda__excluir").parentNode

    console.log(elemento)
    console.log(comparaX)
    console.log(comparaT)
    
    if (elemento == comparaX){
        comparaT.classList.add("fadeOut")
        setTimeout(function(){
            comparaT.remove();
        }, 500);
    }

})
