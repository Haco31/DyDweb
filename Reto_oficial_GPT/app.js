console.log("Entrenamiento Iniciado");

const form = document.querySelector("form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = form.nombre.value;

    // Se crea el <div> contenedor del mensaje
    const contenedor = document.createElement("div");
    contenedor.classList.add("mensaje-card");

    // Se crea el <p> con el mensaje de bienvenida
    const parrafo = document.createElement("p");
    parrafo.textContent = `Bienvenido al entrenamiento: ${nombre}`;

    // Se crea el <button> para eliminar SOLO este contenedor
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");

    btnEliminar.addEventListener("click", function () {
        contenedor.remove(); // Elimina solo su propio contenedor
        console.log(`Mensaje de ${nombre} eliminado`);
    });

    // Se arma la estructura: p + button → dentro del div
    contenedor.appendChild(parrafo);
    contenedor.appendChild(btnEliminar);

    // Se añade el div completo al área de resultado
    resultado.appendChild(contenedor);

    form.reset();
    console.log(`Hola ${nombre}, entrenamiento activo`);
    console.log("Formulario enviado correctamente");
});