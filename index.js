// script.js

// Obtener el botón y el elemento body
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Añadir un evento de clic al botón
toggleButton.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');

    // Cambiar el texto del botón dependiendo del modo
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Oscuro';
    }
});
