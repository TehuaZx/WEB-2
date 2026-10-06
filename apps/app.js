let numeroMaquina = Math.floor(Math.random() * 10) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivina el numero entre 1 y 10"), 10);
let vidas= 3;


while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo: tienes esta cantidad de vidas " + vidas), 10);
}

if (numeroMaquina === numeroUser) {
    console.log("Ganaste");
} else {
    console.log("Perdiste :c");
}