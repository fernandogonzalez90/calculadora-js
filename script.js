// Función para agregar un valor al input "pantalla"
function agregar(valor) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += valor;
}

// Función para borrar el contenido del input "pantalla"
function borrar() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = "";
}

// Función para calcular el resultado y mostrarlo en el input "pantalla"
function calcular() {
    const pantalla = document.getElementById('pantalla');
    const valorPantalla = pantalla.value;
    try {
        const resultado = eval(valorPantalla);
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = "Error"; // Manejar errores de evaluación
    }
}

// Evento para capturar las pulsaciones de teclado
document.addEventListener("keydown", function (event) {
    const pantalla = document.getElementById('pantalla');
    let valor = pantalla.value;

    if (/[\d+\-*/.=]/.test(event.key)) {
        agregar(event.key);
    } else if (event.key === 'Enter') {
        calcular();
        event.preventDefault();
    } else if (event.key === 'Backspace') {
        valor = valor.slice(0, -1); // Elimina el último carácter
        pantalla.value = valor;
        event.preventDefault();
    }
});

// Establecer el foco en el input "pantalla" al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const pantalla = document.getElementById('pantalla');
    pantalla.focus();
});

