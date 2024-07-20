/* let numeroUno = 5;
let numeroDos = 7;
let numeroTres = 9;

const personaUno = {nombre:"Arnold", edad:25, altura:181}
const personaDos = {nombre:"Harry", edad:29, altura:174}

// ---------- Ejercicio 1 ----------
if (numeroUno > numeroDos) {
    console.log("el numero uno es mayor que el numero dos");
} else {
    console.log("el numero dos es mayor que el numero uno")
}

// ---------- Ejercicio 2 ----------
if (numeroUno === numeroDos) {
    console.log('Los numeros dados son iguales');
} else {
    console.log('Los numeros dados son diferentes');
}

// ---------- Ejercicio 3 ----------
if (numeroUno > numeroDos) {
    console.log('el numero uno es mayor que el numero dos');
} else if (numeroUno === numeroDos){
    console.log('Los numeros dados son iguales');
} else {
    console.log('el numero dos es mayor que el numero uno');
}

// ---------- Ejercicio 4 ----------
if (numeroUno < numeroDos && numeroUno < numeroTres) {
    alert('el numero uno es menor que el resto');
} else if (numeroDos < numeroUno && numeroDos < numeroTres) {
    alert('el numero dos es menor que el resto');
} else if (numeroTres < numeroUno && numeroTres < numeroDos){
    alert('el numero tres es menor que el resto');
} else {}

// ---------- Ejercicio 5 ----------
if (personaUno.edad > personaDos.edad){
    alert(personaUno.nombre+" Tiene mayor edad que "+personaDos.nombre);
} else if (personaUno.edad < personaDos.edad){
    alert(personaDos.nombre+" Tiene mayor edad que "+personaUno.nombre);
} else {}
if (personaUno.altura > personaDos.altura){
    alert(personaUno.nombre+" Es mas alto que "+personaDos.nombre);
} else if (personaUno.altura < personaDos.altura) {
    alert(personaDos.nombre+" Es mas alto que "+personaUno.nombre);
} else {}

// ---------- Ejercicio 6 ----------
let nombre = prompt("¿Cual es tu nombre?");
let edad = parseInt(prompt("¿Que edad tienes?"));
let altura = parseInt(prompt("¿Cuanto mides?"));
let vision = parseInt(prompt ("¿Cual es tu estado de la vision del 0 al 10?"));

if (edad >= 18 && altura >= 150 && vision >= 8) {
    alert(nombre+" Estas capacitado para conducir");
} else{
    alert(nombre+" No estas capacitado para conducir");
}

// ---------- Ejercicio 7 ----------
let nombre = prompt("¿Cual es tu nombre?");
let pase = prompt("¿Tienes pase vip o normal?");
let entrada = prompt("¿Tiene permiso para ingresar (si o no)?");

let miNombre = "miguel";
if (nombre === miNombre || pase === "vip"){
    alert("Bienvenida");
} else if (entrada === "si" || entrada === "s" || entrada === "true") {
    let confirmacion = prompt("¿Desea utilizar su entrada?");
    if (confirmacion === "si" || confirmacion === "s" || confirmacion === "true");
    alert("Bienvenida");
} else if (nombre =! miNombre || (pase === "normal" || pase === "vip")) {
    let compraEntrada = prompt("¿Desea comprar la entrada?");
        if (compraEntrada === "si" || compraEntrada === "s" || compraEntrada === "true"){
            let valor = prompt("posees mas de $1000?");
            if (valor >= 1000){
                alert("Compraste tu boleto por un valor de "+valor);
                alert("Bienvenida");
            } else if(valor <=999) {
                alert("Su venta a sido rechazada");
            }
        } else {
            alert("Hasta luego, Regresa pronto");
        }
}

// ---------- Ejercicio 8 ----------
let numeroIncognita = 4;
let numeroIngresado1 = parseInt(prompt("Ingrese un numero"));
if (numeroIngresado1 === numeroIncognita){
    alert("GANASTE, haz adivinado el numero");
} else if (numeroIngresado1 < numeroIncognita){
    alert("el numero ingreso es menor, TE QUEDAN 2 INTENTOS");
}   else if (numeroIngresado1 > numeroIncognita){
    alert("el numero ingreso es mayor, TE QUEDAN 2 INTENTOS");
}else {
    alert("TE QUEDA 2 INTENTOS");
}

let numeroIngresado2 = parseInt(prompt("Ingrese un numero (segundo intento)"));
if (numeroIngresado2 === numeroIncognita){
    alert("GANASTE, haz adivinado el numero");
} else if (numeroIngresado2 < numeroIncognita){
    alert("el numero ingreso es menor, TE QUEDA 1 INTENTO");
}   else if (numeroIngresado2 > numeroIncognita){
    alert("el numero ingreso es mayor, TE QUEDA 1 INTENTO");
} else{
    alert("TE QUEDA UN INTENTO");
}

let numeroIngresado3 = parseInt(prompt("Ingrese un numero (ultimo intento)"));
if (numeroIngresado3 === numeroIncognita){
    alert("GANASTE, haz adivinado el numero");
} else if (numeroIngresado3 < numeroIncognita){
    alert("el numero ingreso es menor");
}   else if (numeroIngresado3 > numeroIncognita){
    alert("el numero ingreso es mayor");
} else {}

   
// ---------- Ejercicio 9 ----------
let edad = parseInt(prompt("Digite su edad"));
if (edad >=0 && edad<= 12){
    alert("Eres infante");
} else if (edad>=13 && edad<=18){
    alert("Eres adolescente");
} else if (edad>=19 && edad<=45){
    alert("Eres un mayor joven");
} else if (edad>=45 && edad<=100){
    alert("Estas anciano");
} else if (edad>=101){
    alert("¿Seguro que esa es su edad?");
} else{}

// ---------- Ejercicio 10 ----------
let jugadorUno = prompt("Jugador1'PIEDRA' 'PAPEL' o 'TIJERA'");
let jugadorDos = prompt("Jugador2'PIEDRA' 'PAPEL' o 'TIJERA'");

if (jugadorUno === jugadorDos){
    alert("EMPATE");
} else if(jugadorUno === "piedra"){
    if(jugadorDos === "tijera"){
        alert("GANADOR jugador1");
    } else if(jugadorDos === "papel"){
        alert("GANADOR jugador2");
    }  else {
        alert("jugador2 esta haciendo trampa");
    }
} else if(jugadorUno === "papel"){
    if(jugadorDos === "tijera"){
        alert("GANADOR jugador2")
    } else if(jugadorDos === "piedra"){
        alert("GANADOR jugador 1");
    }  else {
        alert("jugador2 esta haciendo trampa");
    }
} else if(jugadorUno === "tijera"){
    if(jugadorDos === "papel"){
        alert("GANADOR jugador1")
    } else if(jugadorDos === "piedra"){
        alert("GANADOR jugador2");
    }  else {
        alert("jugador2 esta haciendo trampa");
    }
} else {
    alert("El jugador1 esta haciendo trampa");
}


// ---------- Ejercicio 11 ----------
let color = prompt("¿Ingrese el nombre de un color?");
switch(color){
    case "blanco":
        alert("Falta de color");
        break;
    case "negro":
        alert("Falta de color");
        break;
    case "verde":
        alert("El color de la naturaleza");
        break;
    case "azul":
        alert("El color del agua");
        break;
    case "amarillo":
        alert("El color del sol");
        break;
    case "rojo":
        alert("El color del fuego");
        break;
    case "marron":
        alert("El color de la tierra");
        break;
    default:
        alert("Excelente eleccion, no lo teniamos pensado.");
        break;
}

// ---------- Ejercicio 12 ----------
let valorUno = parseInt(prompt("Digite un valor"));
let valorDos = parseInt(prompt("Digite otro valor"));
let operacion = prompt("¿Que operacion desea realizar? +, -, *, /");

if (operacion === "+"){
    suma = valorUno + valorDos
    alert(valorUno+" + "+valorDos+" ="+suma);
} else if (operacion === "-"){
    resta = valorUno - valorDos;
    alert(valorUno+" - "+valorDos+" ="+resta);
} else if (operacion === "*"){
    multiplicacion = valorUno*valorDos;
    alert(valorUno+" * "+valorDos+" ="+multiplicacion);
} else if (operacion === "/" && valorDos != 0){
    division = valorUno / valorDos;
    alert(valorUno+" / "+valorDos+" ="+division);
} else if (operacion === "/" && valorDos === 0){
    alert("ERROR, no es posible dividir cuando el divisor es igual a 0");
} else{}

// ---------- Ejercicio 13 ----------

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let identidad = prompt("Ingrese su # de documento");
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento");
let lugarNacimiento = prompt("Ingrese el lugar de su nacimiento"); 

alert("Datos ingresados: \n Nombre: "+nombre+"\n Apellido: "+apellido+"\n Identificacion: "+identidad+
    "\n Fecha de nacimiento: "+fechaNacimiento+"\n Lugar de nacimiento: "+lugarNacimiento);

let confirmacion = confirm();

if(confirmacion){
    let dni = {
        nombre: nombre,
        apellido: apellido,
        identidad: identidad,
        fechaNacimiento: fechaNacimiento,
        lugarNacimiento: lugarNacimiento
    };

    console.table(dni);
    console.log("registro exitoso");
} else {
    alert("Vuelva a intentarlo en 1 mes");
} */