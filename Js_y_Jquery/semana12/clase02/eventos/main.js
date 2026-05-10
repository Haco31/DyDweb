// Eventos
// son lass acciones o interacciones que ocurren en una pagina web

// addEventListener
// nos permite asociar un evento con un elemento de nuestro doccumento y cada vez que ocurre este evento, se ejecuta una funcion

// tipos de eventos
// click

// primero - variables
let boton = document.getElementById("miBoton");
console.log(boton);

// segundo - Eventos
// Elemento.addEventListener("tipo de evento", funcion )
boton.addEventListener("click", mostrarMensaje);

// tercero - funciones
function mostrarMensaje() {
  alert("el boton ha sido presionado");
}
