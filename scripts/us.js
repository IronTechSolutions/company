document.addEventListener("DOMContentLoaded", function() {
    // Desplazar la página hasta la sección con la clase "intro-section"
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    const elements = document.querySelectorAll('.info-box-main, .column-half, .column-full, .column-quarter, .feature-box');
    
    // Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
    }

    // Función para añadir la clase 'appear' cuando el elemento está en el viewport
    function checkElements() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('appear');
            }
        });
    }

    // Verifica al hacer scroll
    window.addEventListener('scroll', checkElements);
    // Ejecutar al cargar la página
    checkElements();
});

