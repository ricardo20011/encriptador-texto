//Se hace declaracion de variables a utilizar en los eventos y demas codigo
let inputMensaje = document.getElementById('inputMensaje');
let btnEncriptar = document.getElementById('btnEncriptar');
let btnDesencriptar = document.getElementById('btnDesencriptar');
let mensajeFinal = document.getElementById('mensajeFinal');
let imagenMensajeFinal = document.getElementById('imagenMensajeFinal');
let mensajeUno = document.getElementById('mensajeUno');
let mensajeDos = document.getElementById('mensajeDos');
let contMensajeFinal = document.getElementById('contenedorMensajeFinal');
let btnCopiar = document.getElementById('btnCopiar');



//Se crea funcion para encriptar el mensaje que se pase al parametro
function encriptadorTexto(texto){
    //Se intento hacer de varias maneras, pero se opto por hacerla con expreciones regulares
    //ya que con las expreciones regulares si se podian encontrar las vocales en cada frase
    //ya que pasandole solo la vocal sin exprecion regular, encriptaba solo una parte del texto
    texto = texto.replace(/e/g,'enter');
    texto = texto.replace(/i/g,'imes');
    texto = texto.replace(/a/g,'ai');
    texto = texto.replace(/o/g,'ober');
    texto = texto.replace(/u/g,'ufat');
    //retornamos el texto encriptado
    return texto;
}
//Se creo una funcion para desencriptar el texto que se pase por el parametro
function desencriptadorTexto(texto){
    //Se aplico la misma solucion que para encriptar el texto pero a la inversa
    texto = texto.replace(/enter/g,'e');
    texto = texto.replace(/imes/g,'i');
    texto = texto.replace(/ai/g,'a');
    texto = texto.replace(/ober/g,'o');
    texto = texto.replace(/ufat/g,'u');
    //retornamos el texto desencriptado
    return texto;
}

//Evento de click para el boton de encriptar, el cual hace que se agregue una clase "oculto" para
//el svg y los dos parrafos, y si no se introduce texto en el texarea entonces la clase "oculto" se quitara
//permitiendo ver el mensaje de "Ningún mensaje fue encontrado"
btnEncriptar.addEventListener('click', ()=>{
    //condicional para saber si hay texto en el texarea
    if(inputMensaje.value == ''){
        //Si no hay texto a encriptar entonces se remueve la clase "oculto" permitiendo ver el texto "Ningún mensaje fue encontrado"
        imagenMensajeFinal.classList.remove('oculto');
        mensajeUno.classList.remove('oculto');
        mensajeDos.classList.remove('oculto');
        contMensajeFinal.classList.remove('ajustar-texto');
        btnCopiar.classList.remove('mostrar-btn-copiar');

        //Se reinicia el contenido de la etiqueta que contiene el mensaje final, encriptado o desencriptado
        mensajeFinal.innerText = '';
    } else {
        //Si hay texto se agrega la clase "oculto" para ocultar el mensaje y el svg que indican que no hay mensaje en el input
        imagenMensajeFinal.classList.add('oculto');
        mensajeUno.classList.add('oculto');
        mensajeDos.classList.add('oculto');
        contMensajeFinal.classList.add('ajustar-texto');
        btnCopiar.classList.add('mostrar-btn-copiar');

        //Se utiliza la funcion para encriptar el mensaje
        mensajeFinal.innerText = encriptadorTexto(inputMensaje.value);        
    }
});

//Se agrega un evento click a el boton de Desencriptar
btnDesencriptar.addEventListener('click',()=>{
    if(inputMensaje.value == ''){
        //Si no hay texto a encriptar entonces se remueve la clase "oculto" permitiendo ver el texto "Ningún mensaje fue encontrado"
        imagenMensajeFinal.classList.remove('oculto');
        mensajeUno.classList.remove('oculto');
        mensajeDos.classList.remove('oculto');
        contMensajeFinal.classList.remove('ajustar-texto');
        btnCopiar.classList.remove('mostrar-btn-copiar');

        //Se reinicia el contenido de la etiqueta que contiene el mensaje final, encriptado o desencriptado
        mensajeFinal.innerText = '';
    } else {
        //Se agrega el texto a la etiqueta que contiene el mensaje Final, desencriptando el texto
        mensajeFinal.innerText = desencriptadorTexto(inputMensaje.value);
    }
});

//Se utiliza navigator para copiar el texto a portables
btnCopiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText(mensajeFinal.innerText);
});
