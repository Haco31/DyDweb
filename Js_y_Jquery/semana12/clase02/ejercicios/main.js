// variables
const lista = document.getElementById("lista");
const contenedor = document.querySelector(".contenedor");

// eventos
lista.addEventListener("click", atraparLista);

// funciones
function atraparLista(event) {
  // console.log(event.target);
  // // nos devuelve el elemento seleccionado
  // contenedor.appendChild(event.target);

  if (event.target.classList.contains("elemento3")) {
    // la clase "elemento3" esta contenido en el elemento seleccionado?
    contenedor.appendChild(event.target);
  } else {
    console.log(event.target);
  }
}
