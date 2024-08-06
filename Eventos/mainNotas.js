//Bloc de notas

let idGlobal = 3;
notas = [{
    _id: 1,
    titulo: 'Sacar la basuta',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: false
}, {
    _id: 2,
    titulo: 'Sacar la basuta',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: true
}, {
    _id: 3,
    titulo: 'Sacar la basuta',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: false
}];

//Funcion para dibujar las notas
let container = document.getElementById('nota');
function dibujarNotas(){
    for (let i=0; i < notas.length; i++){

        if (notas.length === 0 ){
            container.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
        }
        let agregandoNota = document.createElement('div');
        agregandoNota.className = 'col-12 col-sm-6'
        agregandoNota.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">${notas[i].titulo}</h5>
            <p class="card-text">${notas[i].texto}</p>
            </div>
        </div>`
    
        container.appendChild(agregandoNota);
}

}
//Funcion para agregar nueva nota
function agregarNota(titulo, texto){

    const nuevaNota = {
        id: ++idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    notas.push(nuevaNota);
    dibujarNotas();
}

//Funcion para borrar notas
function borrarNota(id){
    notas = notas.filter(nota => nota.id !== id);
    dibujarNotas();
}

//Funcion para marcar realizada
function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    nota.realizada = !nota.realizada;
    dibujarNotas();
}
//Funcion para filtrar accion
function filtrarPorRealizadas(notas) {
    return notas.filter(nota => nota.realizada);
}

//Funcion para 
function filtrarPorTexto(notas, texto) {
    if (!texto) return notas;
    return notas.filter(nota =>
        nota.titulo.toLowerCase().includes(texto.toLowerCase())   
 ||
        nota.texto.toLowerCase().includes(texto.toLowerCase())
    );
}

const inputTitulo = document.getElementById('titulo');
const inputTexto = document.getElementById('texto');
const inputBuscar = document.getElementById('buscar'); //falta crear buscardo
const checkboxRealizadas = document.getElementById('realizadas'); //fala crear el checkbox
const borrar = document.getElementById('button-borrar');

//EventListener
borrar.addEventListener('click', borrarNota);

