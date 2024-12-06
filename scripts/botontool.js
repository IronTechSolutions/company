
        // Recuperar el nombre del usuario de localStorage
        const userName = localStorage.getItem('userName');
    
        // Verificar si userName existe en localStorage
        if (!userName) {
            alert("Por favor, inicia sesión para continuar.");
            window.location.href = "login.html"; // Redirige al inicio de sesión si no hay nombre
        } else {
            document.querySelectorAll('.button_comprar').forEach(button => {
                button.addEventListener('click', function(event) {
                    event.preventDefault(); // Evita que el enlace recargue la página
                    const card = this.closest('.card'); // Encuentra el elemento padre .card
                    const toolName = card.querySelector('.card_title').innerText; // Obtiene el nombre de la herramienta
                    const message = `Hola, soy ${userName} y tengo interés en comprar la herramienta ${toolName}.`;
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=50488118862&text=${encodeURIComponent(message)}`; // Crea la URL de WhatsApp
                    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
                });
            });
        }