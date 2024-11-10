document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de forma tradicional

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validación simple
    if (name && email && subject && message) {
        document.getElementById('form-response').textContent = '¡Gracias por tu mensaje! Te responderemos pronto.';
        document.getElementById('form-response').style.color = 'green';
        document.getElementById('form-response').style.animation = 'fadeIn 1s ease-in-out';

        // Limpiar formulario
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('form-response').style.color = 'red';
        document.getElementById('form-response').style.animation = 'fadeIn 1s ease-in-out';
    }
});
