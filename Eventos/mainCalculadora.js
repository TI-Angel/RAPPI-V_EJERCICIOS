//Calculadora de Masa Corporal
function calcular(event) {
    event.preventDefault();
    const estatura = parseFloat(document.getElementById('input-estatura').value);
    const peso = parseFloat(document.getElementById('input-peso').value);
    let imc = (peso / (estatura*estatura));
    
    console.log("Estatura " + estatura);
    console.log("Peso " + peso);
    console.log("IMC: " + Number.parseFloat(imc));
    document.getElementById('resultado').value = imc.toFixed(2);
}
const button = document.getElementById('button');
button.addEventListener('click', calcular);

//Convertidor de moneda

const copInput = document.getElementById('peso');
const usdInput = document.getElementById('dolar');
const tasaCambio = 0.00024;

function convertir(event){
    const origen = event.target.id;
    if (origen === 'peso') {
        destino = 'dolar';
    } else {
        destino = 'peso';
    }

    //Valor a convertir
    const valor = parseFloat(event.target.value);

    //Realizar la conversión
    if (origen === 'peso') {
        resultado = valor * tasaCambio;
    } else {
        resultado = valor / tasaCambio;
    }

    document.getElementById(destino).value = resultado.toFixed(2);   

}
copInput.addEventListener('input', convertir);
usdInput.addEventListener('input', convertir);