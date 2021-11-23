var botaoFiltro = document.querySelector("#botao-filtrar");
var imgExcluir = document.querySelector("#agenda")

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

imgExcluir.addEventListener("click", function(event){
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);

})
