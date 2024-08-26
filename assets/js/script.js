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