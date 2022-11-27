

const substancias = {
    "BHI Broth": 37,
    "BHI Ágar": 52,
    "Mitis salivarius Ágar": 90,
    "Mycosel Ágar": 38,
    "Sabourand dextrose Ágar": 65,
    "Triptina Soja Broth TSB": 30,
    "Triptona Soja Agar TSA": 40,
    "MacConkey": 51.5,
    "Ágar Batata": 42,
    "Ágar CLED": 36.1,
    "Mueller Hinton": 36,
    "Ágar Manitol Salt": 111
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
    
        document.querySelector("#textResultado").innerHTML = `Diluir ${resultado} g de ${opcaoTexto}<BR>em ${volume} ml de água`
        
        document.querySelector(".obs").innerHTML = `* Base para calculo ${volSubstancancia} g de ${opcaoTexto} para cada 1 litro de água`
    
    }








})


// 39g par 1l








