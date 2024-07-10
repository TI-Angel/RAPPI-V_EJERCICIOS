let numeroUno = 5;
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
let numeroIncognita = 3;
let numeroIntentos = 3;
let numeroIngresado = parseInt(prompt("Ingrese un numero"));
if (numeroIngresado > numeroIncognita){
    alert("el numero ingreso es mayor, vuelve a intentarlo");
    numeroIntentos--;
    
} else if ((numeroIngresado < numeroIncognita) && numeroIntentos>0){
    alert("el numero ingreso es menor, vuelve a intentarlo");
    numeroIntentos--;
} else if ((numeroIngresado === numeroIncognita) && numeroIntentos>0){
    alert("Ganaste, haz adivinado el numero");
} else if(numeroIntentos == 0){
    alert("Perdiste");
} else{}


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
let jugadaUno = prompt("'PIEDRA' 'PAPEL' o 'TIJERA'");
let jugadaDos = prompt("'PIEDRA' 'PAPEL' o 'TIJERA'");

let jugadorUno = jugadaUno.toLocaleLowerCase();
let jugadorDos = jugadaDos.toLocaleLowerCase();

if (jugadorUno == "piedra" && jugadorDos == "papel"){
    alert("El jugador dos ha ganado");
} else if(jugadorUno == "piedra" && jugadorDos == "tijera"){
    alert("El jugador uno ha ganado");
} else if (jugadorUno == "piedra" && jugadorDos == "piedra"){
    alert("Ambos jugadores empataron");
} else if(jugadorUno == "papel" && jugadorDos == "tijera"){
    alert("El jugador dos ha ganado")
} else if(jugadorUno == "papel" && jugadorDos == "piedra"){
    alert("El jugador uno ha ganado")
} else if(jugadorUno == "papel" && jugadorDos == "papel"){
    alert("Ambos jugadores empataron");
} else if(jugadorUno == "tijera" && jugadorDos == "tijera"){
    alert("Ambos jugaores empataron");
} else if(jugadorUno == "tijera" && jugadorDos == "piedra"){
    alert("El jugador dos ha ganado");
} else if (jugadorUno == "tijera" && jugadorDos == "papel"){ 
    alert("El jugador uno ha ganado")
} else{
    alert("Uno de los mejoradores ha hecho trampa");
}


// ---------- Ejercicio 13 ----------

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let identidad = prompt("Ingrese su # de documento");
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento");
let lugarNacimiento = prompt("Ingrese el lugar de su nacimiento"); 

alert("Datos ingresados: \n Nombre: "+nombre+"\n Apellido: "+apellido+"\n Identificacion: "+identidad+
    "\n Fecha de nacimiento: "+fechaNacimiento+"\n Lugar de nacimiento: "+lugarNacimiento);