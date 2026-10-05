let carrito = [];
let terminarCompra = false;

while (!terminarCompra) {
    let fruta = prompt("Escribe la fruta que deseas agregar al carrito:");

    if (fruta !== null && fruta.trim() !== "") {
        carrito.push(fruta.trim());

        console.log(fruta.trim() + " fue agregada al carrito.");
    } else {
        console.log("No escribiste ninguna fruta.");
    }

    terminarCompra = confirm(
        "¿Ya no deseas agregar nada más?\n\n" +
        "Aceptar: mostrar el carrito\n" +
        "Cancelar: agregar otra fruta"
    );
}

console.log("Lista de frutas en el carrito:");

// Recorremos el arreglo utilizando forEach
carrito.forEach(function (fruta, indice) {
    console.log((indice + 1) + ". " + fruta);
});

console.log("Total de frutas: " + carrito.length);