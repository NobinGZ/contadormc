document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const subtract = document.getElementById('subtract');

    document.body.addEventListener('click', (event) => {
        if (event.target !== subtract) {
            counter.textContent = parseInt(counter.textContent) + 1;
        }
    });

    subtract.addEventListener('click', (event) => {
        event.stopPropagation();  // Evita que el evento se propague al body
        counter.textContent = parseInt(counter.textContent) - 1;
    });
});
