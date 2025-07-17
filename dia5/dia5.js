const tareas = [];

const boton = document.getElementById('agregar-btn');
const input = document.getElementById('nueva-tarea');
const lista = document.getElementById('lista-tareas');

boton.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto !== "") {
    tareas.push(texto);
    input.value = "";
    mostrarTareas();
    }
});

function mostrarTareas() {
    lista.innerHTML = "";
    tareas.forEach((tarea, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${tarea}`;
    lista.appendChild(item);
    });
}
