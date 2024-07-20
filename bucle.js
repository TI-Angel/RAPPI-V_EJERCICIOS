// ---------- Ejercicio 1 ----------
let numero = parseInt(prompt("Ingresa un numero"));

for (let i = 1; i <= 10; i++){
    operacion = numero * i;
    console.log(operacion);
}

// ---------- Ejercicio 2 ----------
let suma = 0;
let numero;
 
while (numero !== 0) {
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
    suma += numero; 
}

console.log(`La suma de los números ingresados es: ${suma}`);

// ---------- Ejercicio 3 ----------
let numeroSecreto = 54;
let numeroIngresado;
do {
    numeroIngresado = parseInt(prompt("Ingresar un numero"));
    if(numeroSecreto < numeroIngresado){
        alert("El numero que ingresaste es mayor que el numero secreto");
    }
    else if (numeroSecreto > numeroIngresado){
        alert("El numero que ingresaste es menor que el numero secreto");
    }
}
while(numeroSecreto !== numeroIngresado);
alert("FELICIDADES. Acertaste el numero");

// ---------- Ejercicio 4 ----------
let numero = parseInt(prompt("Ingresa un numero y averiguemos si es primo o no"));

for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
        console.log("El "+numero+" no es primo");
    } else {
        console.log("El "+numero+" si es primo");
    }
}

/// ---------- Ejercicio 5 ----------
let numero = parseInt(prompt("Ingresa un numero"));
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}

// ---------- Ejercicio 6 ----------
const marcas = ["Yamaha", "Suzuki", "Kawasaki", "Ducati", "Bmw", "Aprilia", "Honda", "Apache", "Pulsar", "Akt"];

for (let i = 0; i < marcas.length; i++){
    console.log(marcas[i]);
}

// ---------- Ejercicio 7 ----------
const marcas = ["Yamaha", "Suzuki", "Kawasaki", "Ducati", "Bmw", "Aprilia", "Honda", "Apache", "Pulsar", "Akt"];

for (let i = 0; i < marcas.length; i++){
    console.log(marcas[i]);
    console.log(marcas[i]);
}

// ---------- Ejercicio 8 ----------
const grupoFamiliar = ["Padre", "Madre", "Tio", "Hermana", "Hijo"];

for (let i = 0; i < grupoFamiliar.length; i++){
    console.log("El "+grupoFamiliar[i]);
    for (let p = 1; p <= 5; p++){
        console.log("Tiene "+[p]+" propiedad ");
    }
}


// ---------- Ejercicio 9 ----------
const numeros = [5,10,15,20,25,30,35,40,45,50];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 1){
        console.log(numeros[i]+ " Es un numero impar");
    }
}

// ---------- Ejercicio 10 ----------   
let sumaPares = 0;
let sumaImpares = 0;
let numero;

do {
    numero = parseInt(prompt("Ingresa un numero"));
    if (numero !== 0) {
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    }
} while (numero !== 0);
console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);

// ---------- Ejercicio 11 ----------   
const numeros = [50,22,45,20,75,0,35,9,9,16];
let numeroMayor = 0;
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > numeroMayor){
        numeroMayor = numeros[i];
    }
}
console.log("El numero mas grande del arreglos es "+numeroMayor);

// ---------- Ejercicio 12 ----------   
const numeros = [50,22,45,20,75,1,35,9,9,16];
let numeroMenor = numeros[0];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] < numeroMenor){
        numeroMenor = numeros[i];
    }
}
console.log("El numero mas pequeño del arreglos es "+numeroMenor);

// ---------- Ejercicio 13 ----------  
let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
let jugador2 = prompt("Ingrese el nombre del Jugador 2:");
let ganador = false;

    // Bucle principal del juego
do {
    // Pedir la mano de cada jugador
    let manoJugador1 = prompt(jugador1+ " elija: piedra, papel o tijeras:");
    let manoJugador2 = prompt(jugador2+ " elija: piedra, papel o tijeras:");

    // Verificar empate o determinar ganador
    if (manoJugador1 === manoJugador2) {
        alert("Empate! Se juega otra vez.");
    } else if ((manoJugador1 === 'piedra' && manoJugador2 === 'tijeras') ||
    (manoJugador1 === 'papel' && manoJugador2 === 'piedra') ||
    (manoJugador1 === 'tijeras' && manoJugador2 === 'papel')){
    console.log("GANADOR "+jugador1);
    ganador = true;
    } else if ((manoJugador2 === 'piedra' && manoJugador1 === 'tijeras') ||
    (manoJugador2 === 'papel' && manoJugador1 === 'piedra') ||
    (manoJugador2 === 'tijeras' && manoJugador1 === 'papel')){
    console.log("GANADOR "+jugador2);
    ganador = true;
    }
    
} while (ganador === false);

// ---------- Ejercicio 14 ----------  
for (let i = 0; i < 5; i++){
    let linea = ''; 
    for (let j = 1; j <= i; j++) {
        linea += '*';
    }
    console.log(linea+="*\n");
}

// ---------- Ejercicio 15 ----------  
for (let i = 5; i >= 1; i--){
    let linea = ''; 
    for (let j = 1; j <= i; j++) {
        linea += '*';
    }
    console.log(linea+="*\n");
}


// ---------- Ejercicio 16 ---------- 
const numeros = [-7, 2, 0, 10, 8, -1, 5, -3, 9, 1];

for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
        // Si el elemento actual es mayor que el siguiente, intercambiarlos
        if (numeros[j] > numeros[j + 1]) {
            let x = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = x;
        }
    }
}
console.log("Array ordenado de menor a mayor:");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
}
