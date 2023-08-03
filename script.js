const jsConfetti = new JSConfetti(); // Instancia de confetti

document
    .querySelector("#consagrar") // selector del boton para comprobar => id ='consagrar'
    .addEventListener("click", (e) => { // evento al dar click

    })
//Obtener un valor aleatorio con Math.random
// Con Math.floor redondear valores y el  +1 => brindar valores de 1 a 100 
// para que no se repitan siempre valores de 0 a 99 y sea 1 a 100
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0

let ganador = false // para ayudar a detener el incrementador
// Esta accción se va a ejecutar cuando se toque el boton chequear
function checarResultado() {
    if (ganador) { return; } // salir de la funcion cuando se halle ganador
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100';
        mensaje.style.color = 'Red';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Haz adivinado el número!';
        mensaje.style.color = 'green';
        jsConfetti.addConfetti(); // efecto confetti
        numeroEntrada.disabled = true;
        ganador = true; // Se cambio false => a true y se detiene el valor de intentos
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'Más alto! El número es mayor al que dijiste';
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = 'Más bajo! El número es menor al que dijiste';
        mensaje.style.color = 'red'
    }

}
