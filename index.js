var operacao = null;
var resultado = 0;

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
function btnOperacao(valor) {
    var visor = document.getElementById('visor');
    resultado = visor.value;
    operacao = valor
    visor.value = "";
}


// Apagar
function btnC() {
    var visor = document.getElementById('visor');
    visor.value = '0'; 
    operacao = null;
    console.log(visor)
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

    visor.value = resultado;
    operacao = null;
}
