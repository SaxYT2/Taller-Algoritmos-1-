function jugar() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
    let adivinanza;
    let intentos = 0;

    while (adivinanza !== numeroSecreto) {
        adivinanza = parseInt(prompt("Introduce tu suposición:"));
        intentos++;

        if (isNaN(adivinanza)) {
            alert("Por favor, introduce un número válido.");
        } else if (adivinanza < numeroSecreto) {
            alert("Demasiado bajo. ¡Intenta de nuevo!");
        } else if (adivinanza > numeroSecreto) {
            alert("Demasiado alto. ¡Intenta de nuevo!");
        } else {
            alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
            document.getElementById("mensaje").innerText = `¡Correcto! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`;
            break;
        }
    }
}