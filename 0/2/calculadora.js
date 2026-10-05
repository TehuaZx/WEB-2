const form = document.getElementById("calculadora-form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operador = document.getElementById("operador").value;
        let resultado;

        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            resultado = "Ingresa números válidos";
        } else {
            switch (operador) {
                case "sumar":
                    resultado = num1 + num2;
                    break;
                case "restar":
                    resultado = num1 - num2;
                    break;
                case "multiplicar":
                    resultado = num1 * num2;
                    break;
                case "dividir":
                    if (num2 !== 0) {
                        resultado = num1 / num2;
                    } else {
                        resultado = "Error: División por cero";
                    }
                    break;
                default:
                    resultado = "Operador no válido";
                    break;
            }
        }

        document.getElementById("result").textContent = "El resultado es: " + resultado;
    });
}
