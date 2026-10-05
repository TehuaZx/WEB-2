const sumForm = document.getElementById("sumForm");
const result = document.getElementById("result");

if (sumForm && result) {
    sumForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);

        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            result.textContent = "Ingresa números válidos.";
            return;
        }

        const resultado = num1 + num2;
        result.textContent = "La suma es: " + resultado;
    });
}