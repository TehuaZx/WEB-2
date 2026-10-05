function quicksort(arreglo) {
    // Caso base
    if (arreglo.length <= 1) {
        return arreglo;
    }

    let pivote = arreglo[arreglo.length - 1];
    let menores = [];
    let mayoresOIguales = [];

    for (let i = 0; i < arreglo.length - 1; i++) {
        if (arreglo[i] < pivote) {
            menores.push(arreglo[i]);
        } else {
            mayoresOIguales.push(arreglo[i]);
        }
    }

    return [
        ...quicksort(menores),
        pivote,
        ...quicksort(mayoresOIguales)
    ];
}

// Pedimos los elementos al usuario
let entrada = prompt(
    "Escribe los números separados por comas.\nEjemplo: 8, 3, 1, 7, 4"
);

// Convertimos la entrada en un arreglo de números
let numeros = entrada
    .split(",")
    .map(numero => Number(numero.trim()));

// Comprobamos que todos sean números
if (numeros.some(numero => isNaN(numero))) {
    console.log("Error: debes ingresar solamente números separados por comas.");
} else {
    let numerosOrdenados = quicksort(numeros);

    console.log("Arreglo original:");
    console.log(numeros);

    console.log("Arreglo ordenado con Quicksort:");
    console.log(numerosOrdenados);
}