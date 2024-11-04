function calcularIMC() {
    // Pedir al usuario su peso y altura
    const peso = parseFloat(prompt("Por favor, introduce tu peso en kilogramos:"));
    const altura = parseFloat(prompt("Por favor, introduce tu altura en metros:"));

    // Verificar que los valores sean números válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, introduce valores válidos para el peso y la altura.";
        return;
    }

    // Cálculo del IMC
    const imc = peso / (altura * altura);

    // Clasificación del IMC
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)} - Clasificación: ${clasificacion}`;
}

// Llamar a la función para iniciar el cálculo
calcularIMC();