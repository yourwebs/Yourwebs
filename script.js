document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.nav-link[href="#contacto"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contacto').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('.solicitar-boton').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contacto').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const submitButton = document.getElementById('submitButton');
        submitButton.disabled = true;
        submitButton.classList.add('btn-success');
        submitButton.innerHTML = '✓ enviado con éxito';

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.classList.remove('btn-success');
            submitButton.innerHTML = 'Enviar';
        }, 15000);
    });
});
