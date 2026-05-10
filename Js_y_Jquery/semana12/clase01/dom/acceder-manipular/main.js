// dom

// -------------------Accediendo al dom-------------------

//getElementById
// atrapa un elemento por su id
// document.getElementById("name");
const nombre = document.getElementById("name");
// console.log(nombre);
const texto = document.getElementById("texto");
// console.log(texto);

//getElementsByTagName
// atrapa todos los elementos por el nombre de la etiqueta, retorna una coleccioon de elementos.
const enlace = document.getElementsByTagName("a");
// console.log(enlace);

//querySelector
// atrapa un elemento por su referencia, sea nombre de etiqueta, clase, id o atributo
const link = document.querySelector("a");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector("#link2");
// console.log(link);
// console.log(link1);
// console.log(link2);

// querySelectorAll
// atrapa todos los elementos por el nommbre de la etiqueta, retorna una coleccion de nodos
const links = document.querySelectorAll("a");
// console.log(links);

/* ------------- Manipulando los elementos ------------- */

//innerHTML
// podemos agregar html dentro de un elemento
let contenedor = document.querySelector("div");
// contenedor.innerHTML = `<h2>Titulo</h2>`;
// console.log(contenedor);

//textContent
// agregar texto a un elemento
let textoContenedor = document.getElementById("contenedor");
// textoContenedor.textContent = "solo texto";
// console.log(textoContenedor);

//style
// agrega la etiqueta style al elemento html y podemos definir estilos css
let textoEstilos = document.querySelector(".estilos");
// textoEstilos.textContent = "solo texto";
// textoEstilos.style = "color:red; background-color:orange;";
// console.log(textoEstilos);

//setAttribute
// agrega atribvutos a un elemento
let elemento = document.querySelector("#contenedor");
// elemento.setAttribute("class", "nombreClase");
// elemento.textContent = "solo texto";
// console.log(elemento);

//
let textRemove = document.querySelector("div");
textRemove.textContent = "solo texto";
textRemove.removeAttribute("class");
console.log(textRemove);
