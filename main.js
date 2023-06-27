const input = document.querySelector('.tarea input');
const listaTareas = document.querySelector('.listaTareas ul');
let tareas = [];

// imprimir

function imprimirStorage() {
    document.addEventListener('DOMContentLoaded', () => {
        tareas = JSON.parse(localStorage.getItem('tareas'));
        guardar();
    })
}
imprimirStorage();

// borrar
listaTareas.addEventListener('click', borrar);

function borrar(e) {
    if (e.target.tagName == 'SPAN') {
        const borrador = parseInt(e.target.getAttribute('tarea-id'));
        tareas = tareas.filter(tarea => tarea.id !== borrador);
        guardar();
    }
}

// formulario y validacion

function añadirTarea() {
    const tarea = input.value;
    if (tarea === '') {
        alert('Hay que rellenar el campo')
    } else {
        const objeto = {
            tarea: tarea,
            id: Date.now()
        }
        tareas = [...tareas, objeto]
        guardar();
        input.value ='';
    }
}

// guardar

function guardar() {
    limpiarBarra();
    if (tareas.length > 0) {
        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.innerHTML = `${tarea.tarea} <span tarea-id="${tarea.id}">X</span>`;
            listaTareas.appendChild(li);
        })
    }
    alStorage();
}

function alStorage() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function limpiarBarra() {
    listaTareas.innerHTML ='';
}