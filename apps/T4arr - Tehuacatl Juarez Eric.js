// Inicializamos un arreglo para almacenar nombres
let nombres = [];

// Funcion para agregar nombre
function agregarNombre() {
    let nombre = prompt("Introduce tu nombre");
    nombre = nombre ? nombre.trim() : "";

    if (nombre !== "") {
        nombres.push(nombre);
        alert(`Nombre agregado de forma exitosa: ${nombre}`);
    } else {
        alert("El nombre no puede estar vacio");
    }
}

// Funcion para mostrar todos los nombres
function mostrarNombres() {
    if (nombres.length === 0) {
        alert("No hay nombres cargados");
    } else {
        let mensaje = "Nombres almacenados:\n";
        nombres.forEach((nombre, index) => {
            mensaje += `${index + 1}.- ${nombre}\n`;
        });
        alert(mensaje);
    }
}

// Funcion para mostrar el menu
function mostrarMenu() {
    let opcion;

    do {
        opcion = parseInt(prompt(`
            Opciones Menu
            1.- Agregar nombre
            2.- Mostrar nombres
            3.- Salir
        `));

        switch (opcion) {
            case 1:
                agregarNombre();
                break;
            case 2:
                mostrarNombres();
                break;
            case 3:
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion invalida");
        }
    } while (opcion !== 3);
}

mostrarMenu();