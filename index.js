var operacao = null;
var resultado = 0;
var idAtivo = null;

//Numero
function DigitaNumero(valor) {
    console.log(valor)
    var visor = document.getElementById('visor');

    if ( visor.value != 0) {
        visor.value += valor;
    } else {
        visor.value = valor;
    }
}

// Operações
function btnOperacao(valor, id) {
    var visor = document.getElementById('visor');
    resultado = visor.value;
    operacao = valor
    visor.value = "";

    if(idAtivo != null){
        document.querySelector(idAtivo).classList.remove("btn-ativo");
        idAtivo = null;
    }

    document.querySelector(id).classList.add("btn-ativo");
    idAtivo = id;
}


// Apagar
function btnC() {
    var visor = document.getElementById('visor');
    visor.value = '0'; 
    operacao = null;
    console.log(visor);

    if(idAtivo != null){
        document.querySelector(idAtivo).classList.remove("btn-ativo");
        idAtivo = null;
    }
}

// Igual
function btnIg() {
    var visor = document.getElementById('visor');

    if (operacao == "/") {
        resultado = resultado / visor.value;
    }
    if (operacao == "*") {
        resultado = resultado * visor.value;
    }
    if (operacao == "-") {
        resultado = resultado - visor.value;
    }
    if (operacao == "+") {
        resultado = parseFloat(resultado) + parseFloat(visor.value);
    }

    if(idAtivo != null){
        document.querySelector(idAtivo).classList.remove("btn-ativo");
        idAtivo = null;
    }

    visor.value = resultado;
    operacao = null;
}
