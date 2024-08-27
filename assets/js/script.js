// Función para encriptar el texto
function encriptar() {
    const texto = document.getElementById('textoIngresado').value.toLowerCase();
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('mensajeFinal').value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = document.getElementById('textoIngresado').value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('mensajeFinal').value = textoDesencriptado;
}

// Función para verificar el contenido del textarea y mostrar el mensaje si está vacío
function verificarTexto() {
    const textoIngresado = document.getElementById('textoIngresado').value;
    const mensajeVacío = document.querySelector('.textAreaVacio');

    if (textoIngresado.trim() === '') {
        mensajeVacío.style.display = 'block'; 
    } else {
        mensajeVacío.style.display = 'none';    }
}

// Llama a la función cuando el contenido del textarea cambia
document.getElementById('textoIngresado').addEventListener('input', verificarTexto);

// Inicializa la visibilidad del mensaje cuando se carga la página
document.addEventListener('DOMContentLoaded', verificarTexto);