let carrito = [];
let terminarCompra = false;

while (!terminarCompra) {
    let fruta = prompt("Escribe la fruta que deseas agregar al carrito:");

    // Comprobamos que el usuario haya escrito una fruta
    if (fruta !== null && fruta.trim() !== "") {
        carrito.push(fruta.trim());

        console.log(fruta.trim() + " fue agregada al carrito.");
    } else {
        console.log("No escribiste ninguna fruta.");
    }

    // Aceptar termina la compra; cancelar permite agregar otra fruta
    terminarCompra = confirm(
        "¿Ya no deseas agregar nada más?\n\n" +
        "Aceptar: terminar compra\n" +
        "Cancelar: agregar otra fruta"
    );
}

// Mostramos el contenido del carrito
console.log("Lista de frutas en el carrito:");

for (let i = 0; i < carrito.length; i++) {
    console.log((i + 1) + ". " + carrito[i]);
}

console.log("Total de frutas: " + carrito.length);