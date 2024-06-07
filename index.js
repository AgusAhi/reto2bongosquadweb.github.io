document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    const modeText = document.getElementById('modeText');

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleButton.querySelector('img').src = 'images/blanco.png';
            toggleButton.querySelector('img').alt = 'Modo Oscuro';
            modeText.textContent = 'Modo Oscuro';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleButton.querySelector('img').src = 'images/negro.png';
            toggleButton.querySelector('img').alt = 'Modo Claro';
            modeText.textContent = 'Modo Claro';
        }
    });
});
