// funciones
// son bloques de codigo reutilizables que pueden ejecutar una tarea especifica

// funcion Declarativa sin return
//
function saludarPersona() {
  console.log("soy una funcion declarativa");
}
// saludarPersona();

// funcion Declarativa con return
function calcularPromedio() {
  let promedio = (4 + 5 + 3) / 3;

  return promedio;
}
// console.log(calcularPromedio());

//con parametros
// let nombre;
// console.log(nombre)
function saludar(nombre) {
  //los parametros estan dentro del parentesis
  console.log(`Hola ${nombre}`);
  // console.log(`Hola carlos`)
  // console.log(`Hola jose`)
}
// saludar("carlos"); //argumento
// saludar("jose"); //argumento
// saludar("diego"); //argumento

function operacion(numero1, numero2, numero3) {
  console.log(numero1 + numero2 + numero3);
}
// operacion(200, 40, 56);
// operacion(100, 80, 6);

//------------ tipos de funciones -------------

// funcion declarativa
saludarPersonas();

function saludarPersonas() {
  console.log("soy una funcion declarativa");
}

// funcion anonima
const saludarPerrito = function () {
  console.log("hola firulais");
};
// saludarPerrito();

// funcion de flecha - Arrow function
// const saludarAlumnos = () => {
//   return "hola alumnos";
// };
// console.log(saludarAlumnos());
const saludarAlumnos = () => "hola alumnos";
// console.log(saludarAlumnos());

// Hoisting
// durante la fase de creacion, javascript mueve la declaracion de la funcion a la parte superior de su contexto.
// el hoisting solo aplica para las funciones declarativas
