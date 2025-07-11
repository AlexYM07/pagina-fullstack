function calcularEdad(anioNacimineto) {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimineto
}

const boton = document.getElementById('calcular')

boton.addEventListener('click', () => {
    const input = document.getElementById('nacimiento');
    const resultado = document.getElementById('resultado');
    const anio = parseInt(input.value);

    if (isNaN(anio) || anio <1900 || anio > new Date().getFullYear()) {
        resultado.textContent = "Por favor, introduce un anio valido.";
    } else {
        const edad = calcularEdad(anio);
        resultado.textContent = `tienes aproximadamente ${edad} anios.`;
    }
});
