// variables
let menu = document.getElementById("miMenu"); //ul
let boton = document.getElementById("miBoton"); //button

// Eventos
boton.addEventListener("mouseover", mostrarLista);
boton.addEventListener("mouseout", ocultarLista);

// funciones
function mostrarLista() {
  // console.log("lista mostrada");
  menu.style.display = "block";
}

function ocultarLista() {
  menu.style.display = "none";
}
