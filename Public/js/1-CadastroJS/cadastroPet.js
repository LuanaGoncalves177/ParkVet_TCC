var botao_servicosEpacotes = document.querySelector("#servicos-pacotes");
var botao_novoPet = document.querySelector('#novo-pet')
var nPets = 1

botao_servicosEpacotes.addEventListener("click", function(event){
event.preventDefault();

var pet = obtemInformacoesDoFormPet();
var erros = validaDadosPet(pet);

if (erros.length == 0){
    //location.href = "../ServiçosEpacotes/servicosEpacotes.html"
    
}else{
    
    console.log(erros)
    alert(erros)
    return;
}


});

botao_novoPet.addEventListener("click", function(event){
    event.preventDefault();
   
    var pet = obtemInformacoesDoFormPet();
    var erros = validaDadosPet(pet);
    
if (erros.length == 0){
    //Salvar informações do primeiro pet
    console.log(pet)
    nPets = nPets + 1
    
    var labelPets = document.querySelector("#formulario__label")
    labelPets.textContent = "Nome do Pet " + nPets + ":"

    limparInformacoes();
    return
    //console.log(pet)
}else{
    //exibeErrosPet(erros)
    console.log(pet)
    console.log(erros)
    alert(erros)
    return;
}

});

function obtemInformacoesDoFormPet(){
    var pet = {
        nomePet: document.querySelector('#pet-nome').value,
        raca: document.querySelector('#pet__raca').value,
        especie: document.querySelector('#pet-especie').value,
        pelo: document.querySelector('#pet-pelo').value,
        porte: document.querySelector('#pet-porte').value,
        sexo: document.querySelector('#pet-sexo').value    
    }
    return pet

}
function validaDadosPet(pet){
    var erros = [];

    if (!validaNomePet(pet.nomePet)){
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
function validaNomePet(nomePet){
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
    if (sexo == "Macho" || sexo == "Fêmia"){
        return true
    }
    return false
}

function limparInformacoes(){
    document.querySelector('#pet-nome').value = ""
    document.querySelector('#pet__raca').value = ""
    document.querySelector('#pet-especie').value = ""
    document.querySelector('#pet-pelo').value = ""
    document.querySelector('#pet-porte').value = ""
    document.querySelector('#pet-sexo').value = ""

}