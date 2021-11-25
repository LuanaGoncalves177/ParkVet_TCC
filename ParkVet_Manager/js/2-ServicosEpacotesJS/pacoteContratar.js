var botao_buscar = document.querySelector("#buscar")

botao_buscar.addEventListener("click", function(event){
    event.preventDefault()

    var busca = document.querySelector("#nome-busca").value
    var filtro = document.querySelector("#filtro-busca").value
    
    if (busca == "" || validaFiltro(filtro)){
        alert("Erro: Preencha os campos de busca")
        return
    }else{
        console.log("ok")
        console.log(busca)
        console.log(filtro)
        //Enviar solicitação de busca e rebecer dados.
    }
})

//link dos buttons para uso de pacotes

function validaFiltro(filtro){
    if(filtro == "Nome do Cliente" || filtro == "Nome do Pet"){
        return false
    }
    return true
}