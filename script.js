

const substancias = {
    "BHI Broth": 37,
    "BHI Ágar": 52,
    "Mitis salivarius Ágar": 90,
    "Mycosel Ágar": 38,
    "Sabouraud": 65,
    "TSB": 30,
    "TSA": 40,
    "MacConkey": 51.5,
    "Ágar Batata": 42,
    "Ágar CLED": 36.1,
    "Mueller Hinton": 36,
    "Ágar Manitol Salt": 111
}

function limpar(){
    document.location.reload(true)
}

function limparCampos(){
    document.querySelector("#textResultado").innerHTML = ``
    document.querySelector("#volume").value = ''
    document.querySelector('#resultado').classList.remove("resultado");
}




const btn = document.querySelector("#calcular");
btn.addEventListener("click", function (e) {

    e.preventDefault()
    
    var volume = document.querySelector("#volume").value
    var select = document.getElementById("select");
    var opcaoTexto = select.options[select.selectedIndex].text;


    if (volume == "" || opcaoTexto == "Selecionar") {
        document.querySelector("#textResultado").innerHTML = `Favor preencher todos os campos`
    }else{
        
        var volSubstancancia = substancias[opcaoTexto]
    
        var resultado  = volSubstancancia * volume /1000
        var resultado  = resultado.toFixed(3)
    
        document.querySelector("#textResultado").innerHTML = `Diluir <b><font size=+2>${resultado} g</font size=+1></b> de<BR> <b><font size=+1>${opcaoTexto}</font size=+2></b><BR>em <b><font size=+2>${volume} ml</font size=+2></b> de água`
        
        document.querySelector('#resultado').classList.add("resultado");
    }








})


// 39g par 1l









