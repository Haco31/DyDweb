// variables
const inputBusqueda = document.querySelector(".busqueda");
const formulario = document.querySelector("#formulario");

// input
// cuando realizas cualquier accion dentro del input, esccribir, cortar, copiar, pegar, etc

// eventos
inputBusqueda.addEventListener("input", valorInput);
formulario.addEventListener("submit", enviarInfo);

// funciones
function valorInput(event) {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.value);
}

function enviarInfo(event) {
  event.preventDefault();
  // previene la accion por defecto de enviar el formulario o entrar a un enlace

  console.log("info enviada");
  console.log(event.type);
  console.log(event.target);
}
