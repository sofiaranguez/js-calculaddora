//-------- proyecto de calculadora ------
function calcular() {
    const operacion = prompt("Elige una operación (suma, resta, multiplicacion, division):");
    const num1 = parseInt(prompt("Ingresa el primer número:"));
    const num2 = parseInt(prompt("Ingresa el segundo número:"));

    let resultado;
    //-------- Bucle----------
    while (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        num1 = parseInt(prompt("Ingresa el primer número:"));
        num2 = parseInt(prompt("Ingresa el segundo número:"));
    }
    // --------aplicamos switch------
    switch (operacion) {
        case "suma":
            resultado = sumar(num1, num2);
            break;
        case "resta":
            resultado = restar(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicar(num1, num2);
            break;
        case "division":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación inválida";
    }

    alert("El resultado es: " + resultado);
}
//-------- funciones--------
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return a / b;
}

calcular();
console.log(calcular)

//ejemplos con if y else-----

const nombre = prompt("Ingresa tu nombre:");

if (nombre) {
    console.log("¡Hola, " + nombre + "!");
} else {
    console.log("No ingresaste un nombre válido.");
}