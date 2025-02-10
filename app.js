// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturamos el campo de texto
    let nombre = input.value.trim(); // Eliminamos espacios en blanco

    if (nombre === "") {
        alert("El campo de texto está vacío, por favor escriba un nombre válido.");
        console.log("Intento de agregar un nombre vacío.");
        return;
    }

    // Agregamos el nombre al array y actualizamos la lista en pantalla
    amigos.push(nombre);
    console.log("Nombre agregado:", nombre);
    console.log("Lista actualizada:", amigos);

    actualizarLista(); // Llamamos a la función que muestra los nombres en pantalla
    input.value = ""; // Limpiamos el campo de texto
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de actualizarla

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        console.log("Intento de sorteo sin nombres en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    console.log("Índice seleccionado:", indiceAleatorio);
    console.log("Amigo seleccionado:", amigoSeleccionado);

    // Mostramos el resultado en pantalla
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Su amigo secreto es: " + amigoSeleccionado;
}