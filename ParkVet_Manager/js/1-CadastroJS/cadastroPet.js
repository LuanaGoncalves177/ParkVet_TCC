var botao_servicosEpacotes = document.querySelector("#servicos-pacotes");

botao_servicosEpacotes.addEventListener("click", function(event){
event.preventDefault();

var pet = obtemInformacoesDoFormPet();
var erros = validaDadosPet(pet);

if (erros.length == 0){
    //location.href = "../2-ServiçosEpacotes/servicosEpacotes.html"
    console.log(pet)
}else{
    //exibeErrosPet(erros)
    
    console.log(erros)
    console.log(pet)
    alert(erros)
    return;
}


});

function obtemInformacoesDoFormPet(){
    var pet = {
        nomePet: document.querySelector('#tutor-nome').value,
        raca: document.querySelector('#pet__raca').value,
        especie: document.querySelector('#pet-especie').value,
        pelo: document.querySelector('#pet-pelo').value,
        porte: document.querySelector('#pet-porte').value,
        sexo: document.querySelector('#pet-pelo').value    
    }
    return pet

}
function validaDadosPet(pet){
    var erros = [];

    if (!validaNome(pet.nome)){
        erros.push("Erro: Nome");
    }
    if (!validaRaca(pet.raca)){
        erros.push("Erro: raça invalida");
    }
    if (!validaEspecie(pet.especie)){
        erros.push("Erro: Especie invalida");
    }
    if(!validaPorte(pet.porte)){
        erros.push("Erro: Porte Invalido")
    }
    if (!validaSexo(pet.sexo)){
        erros.push("Erro: Sexo Invalido")
    }

    return erros;
}


//Validações do Tutor
function validaPet(nomePet){
    if(nomePet == ""  ){
        return false;
    }
    return true;
}

function validaRaca(raca){
    if (raca == ""){
        return false
    }
    return true
}
function validaEspecie(especie){
    if (especie == ""){
        return false
    }
    return true
}
function validaPorte(porte){
    if(porte == ""){
        return false
    }
    return true
}
function validaSexo(sexo){
    if (sexo != "Macho" || sexo != "Fêmia"){
        return false
    }
    return true
}

