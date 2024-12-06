// Recuperar el nombre del usuario de localStorage
const userName = localStorage.getItem('userName');
        
// Agregar el evento click a todos los enlaces de WhatsApp
document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        
        const service = this.closest('.contenido').querySelector('h3').innerText; // Obtener el servicio desde el título (h3)
        const message = `Hola, soy ${userName} y estoy interesado en el desarrollo web de ${service}.`;
        const phoneNumber = "50488118862"; // Tu número de WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Redirigir a WhatsApp
        window.open(whatsappUrl, '_blank');
    });
});