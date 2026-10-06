let numero = parseInt(
    prompt("¿Qué tabla de multiplicar quieres ver?"),
    10
);

console.log("Tabla de multiplicar del " + numero);

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    let resultado = numero * multiplicador;

    console.log(
        numero + " x " + multiplicador + " = " + resultado
    );
}