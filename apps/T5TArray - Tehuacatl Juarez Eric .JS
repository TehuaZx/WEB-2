let inventario= [];
function mostrarMenu(){
    return parseInt(prompt(`
            Opciones disponibles
            1.- Agregar productos
            2.- Mostrar productos
            3.- Buscar productos
            4.- Reducir cantidad de un producto
            5.- Borrar todos los productos
            6.- Salir
            Elige una opcion
        `), 10);
}
function agregarProducto(){
    let nombre = prompt("Ingrese el nombre del producto");
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto"), 10);
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    if(nombre && nombre.trim() !== "" && cantidad > 0 && precio > 0){
        let producto = {
            nombre: nombre.trim(),
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado correctamente");
    }else{
        alert("La cantidad y el precio deben ser mayores a 0");
    }

}
function mostrarProductos(){
    if(inventario.length === 0){
        alert("No hay productos en el inventario");
    }else{
        let mensaje = "Productos en el inventario:\n";
        for (let i=0; i<inventario.length; i++){
            mensaje += `Producto ${i + 1}:\n` +
                `Nombre: ${inventario[i].nombre}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
                `Precio: ${inventario[i].precio}\n\n`;
        }
        alert(mensaje);
    }
}
function buscarProducto(){
    let nombre = prompt("Ingrese el nombre del producto a buscar");
    let encontrado= false;
    for (let i=0; i<inventario.length; i++){
        if(nombre && inventario[i].nombre.toLowerCase() === nombre.trim().toLowerCase()){
            alert(`Producto encontrado:\nNombre: ${inventario[i].nombre}\nCantidad: ${inventario[i].cantidad}\nPrecio: ${inventario[i].precio}`);
            encontrado = true;
            break;
        }
    }
    if(!encontrado){
        alert("Producto no encontrado");
    }
}

function reducirCantidad(){
    let nombre = prompt("Ingrese el nombre del producto cuya cantidad desea reducir");
    if (!nombre) {
        alert("Debe indicar un producto");
        return;
    }

    let producto = inventario.find(
        elemento => elemento.nombre.toLowerCase() === nombre.trim().toLowerCase()
    );

    if (!producto) {
        alert("Producto no encontrado");
        return;
    }

    producto.cantidad--;
    if (producto.cantidad === 0) {
        inventario = inventario.filter(elemento => elemento !== producto);
        alert("La cantidad llegó a 0 y el producto fue eliminado");
    } else {
        alert(`Cantidad actualizada: ${producto.nombre} (${producto.cantidad})`);
    }
}

function borrarTodosLosProductos(){
    if (inventario.length === 0) {
        alert("No hay productos para borrar");
        return;
    }

    inventario = [];
    alert("Todos los productos fueron borrados");
}

function inicarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                reducirCantidad();
                break;
            case 5:
                borrarTodosLosProductos();
                break;
            case 6:
                continuar = false;
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion no valida");
        }
    }
}
inicarPrograma();
