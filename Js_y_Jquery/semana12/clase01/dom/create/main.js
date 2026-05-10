// ParentNode
// considera los nodos, elementos html, texto, espacios vacios.
let itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
let main = itemList.parentNode;
main.style.backgroundColor = "yellowgreen";
// console.log(main);
// console.log(itemList);
// console.log(main.parentNode.parentNode);

// ParentElement
// similar al parentNode
// cuando quieras modificar una propiedad especifica de manera clara y directa. es ideal para cambios pequenhos y controlados.
// considera solo elementos html

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "prueba";

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "prueba ultima";

// createElement
const nuevoDiv = document.createElement("div");
nuevoDiv.innerHTML = "<h1>Hola soy Goku</h1>";
nuevoDiv.className = "divClass";
nuevoDiv.setAttribute("id", "divId");
// console.log(nuevoDiv);

// appendChild
let nuevoLi = document.createElement("li");
nuevoLi.textContent = "Item 5";
nuevoLi.className = "list-group-item";
itemList.appendChild(nuevoLi);
// console.log(nuevoLi);
