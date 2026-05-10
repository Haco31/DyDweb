const rojo = document.querySelector(".red");
const azul = document.querySelector(".azul");
const verde = document.querySelector(".verde");

// rojo.addEventListener("click", areaRoja);
// azul.addEventListener("click", areaAzul);
// verde.addEventListener("click", areaVerde);

// function areaRoja(event) {
//   event.stopPropagation();
//   console.log("click en rojo");
// }

// function areaAzul(event) {
//   event.stopPropagation();
//   console.log("click en azul");
// }

// function areaVerde(event) {
//   event.stopPropagation();
//   console.log("click en amarillo");
// }

rojo.addEventListener("click", areaPropagada);

function areaPropagada(event) {
  // console.log(event.target.classList.contains("red"));
  // si la clase "red" esta contenida en el elemento seleccionado

  if (event.target.classList.contains("red")) {
    console.log("click en el rojo");
  }

  if (event.target.classList.contains("azul")) {
    console.log("click en el azul");
  }

  if (event.target.classList.contains("verde")) {
    console.log("click en el verde");
  }
}
