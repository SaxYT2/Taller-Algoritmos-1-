function saludarSegunHora() {
    const ahora = new Date();
    const hora = ahora.getHours();

    let saludo;

    if (hora >= 6 && hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }

    console.log(saludo);
}

saludarSegunHora();
