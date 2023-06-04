var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munheco = document.querySelector(".munheco");
var contenedor = document.querySelector(".titulo-parrafo");
var resultado = document.querySelector(".resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".texto")
    return cajatexto.value
}

function ocultarAdelante(){
    munheco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    const sustituciones = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    mensaje = mensaje.replace(/a|e|i|o|u/g, function (match) {
        return sustituciones[match];
    });
    return mensaje;

}

function desencriptarTexto(mensaje) {
    const sustituciones = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };

    // Usa la función replace con una expresión regular para buscar y reemplazar
    // cada coincidencia en el texto con la sustitución correspondiente.
    mensaje = mensaje.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        return sustituciones[match];
    });

    return mensaje;
}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});