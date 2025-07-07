const boton = document.getElementById('boton');
const titulo = document.getElementById('titulo');

const botonColor = document.getElementById('botonColor')
// esto me ayudo a cambiar el boton //
// const segundoBoton = document.getElementById('segundo-boton');
// const color = document.getElementById('cuerpo');

boton.addEventListener('click', () => {
    titulo.textContent = 'Texto cambiado con javascript';
});


// aqui lo que hice es cambiar por mi cuenta lo que hace el boton // 
// segundoBoton.addEventListener('click', () =>
// {
//     color.style.backgroundColor = 'lightyellow';
// }) ;

botonColor.addEventListener('click', () =>{
    const colores = ['#f5f5f5', '#ffcccc', '#c8e6c9', '#bbedfb', '#ffe0b2'];
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = randomColor;
} )


// boton 3 ; muestra texto del input
const input = document.getElementById('entradaTexto');
const parrafo = document.getElementById('textoMotrado');

input.addEventListener('input', () => {
    parrafo.textContent = input.value;
}) 
