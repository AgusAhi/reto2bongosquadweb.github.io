document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    const modeText = document.getElementById('modeText');
    const mainImage = document.getElementById('main-image');

    // Función para aplicar el modo oscuro o claro
    function applyMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleButton.querySelector('img').src = 'negro.png';
            toggleButton.querySelector('img').alt = 'Modo Claro';
            modeText.textContent = 'Modo Claro';
            mainImage.src = 'volteada-Photoroom-modo-negro.png';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleButton.querySelector('img').src = 'blanco.png';
            toggleButton.querySelector('img').alt = 'Modo Oscuro';
            modeText.textContent = 'Modo Oscuro';
            mainImage.src = 'volteada-Photoroom.png';
        }
    }

    // Comprobar si hay una preferencia almacenada en localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
        applyMode(savedMode === 'true');
    }

    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        applyMode(!isDarkMode);
        // Guardar la preferencia en localStorage
        localStorage.setItem('darkMode', !isDarkMode);
    });
});
