var campoFiltro = document.querySelector("#data-servico");



campoFiltro.addEventListener("input", function(event){
    //var dataEscolhida = this.value;
    var clientesAgendados = document.querySelectorAll(".clientes-agendados");
    
    //if (this.value != "dd/mm/aaaa"){
        for(var i; i < clientesAgendados.length; i++){

            var clienteAgendado = clientesAgendados[i];
            var tdData = clienteAgendado.querySelector(".info-data");
            var dataAgendada = tdData.textContent;
            var expressao = new RegExp(this.value)
            
            if(!expressao.test(dataAgendada)){
                clienteAgendado.classList.add("invisivel");
            }else{
                clienteAgendado.classList.remove("invisivel");
            }
        }
    //}else{
    //    for (var i = 0; i < clientesAgendados.length; i++){
    //        var clienteAgendado =  clientesAgendados[i];
    //        clienteAgendado.classList.remove("invisivel");
    //    }
   // }

});