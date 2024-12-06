// Obtener el elemento de la flecha
const arrow = document.querySelector('.arrow');

// Obtener el contenedor de las cards
const cardContainer = document.getElementById('card-container');

// Agregar un evento de clic a la flecha para desplazarse hasta las tarjetas
arrow.addEventListener('click', () => {
    cardContainer.scrollIntoView({ behavior: 'smooth' });
});

// Datos de los clientes
const clientsData = [
    { // cliente 1
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen de la empresa
        websiteUrl: "", // URL de la página web del cliente
    },
    { // cliente 2
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 3
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "img_main/desarrollo.jpg", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 4
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 5
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 6
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 7
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 8
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 9
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 10
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
    { // cliente 10
        title: "Espacio disponible",
        description: "Este apartado es exclusivamente para clientes de IronTech Solutions, publicidad a sus páginas.",
        avatarColor: "#000000", // Color del avatar
        buttonText: "Visitar",
        imageUrl: "", // URL de la imagen
        websiteUrl: "", // URL de la página web
    },
];

// Función para generar las tarjetas
function generateCards() {
    clientsData.forEach(client => {
        // Crear el contenedor de la tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        // Crear el contenido de la tarjeta
        card.innerHTML = `
            <div class="card__img">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                    <rect fill="#ffffff" width="540" height="450"></rect>
                    <defs>
                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)">
                            <stop offset="0" stop-color="#290e00"></stop>
                            <stop offset="1" stop-color="#290e00"></stop>
                        </linearGradient>
                    </defs>
                    <rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect>
                </svg>
            </div>
            <div class="card__avatar">
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="64" cy="64" fill="${client.avatarColor}" r="60"></circle>
                    <circle cx="64" cy="64" fill="#000000" opacity=".4" r="48"></circle>
                    <image href="${client.imageUrl}" x="24" y="24" width="80" height="80" clip-path="circle(50% at 50% 50%)"/>
                </svg>
            </div>
            <div class="card__info">
                <h2 class="card__title">${client.title}</h2>
                <p class="card__description">${client.description}</p>
                <a href="${client.websiteUrl}">
                    <button class="card__button">${client.buttonText}</button>
                </a>
            </div>
        `;

        // Añadir la tarjeta al contenedor
        cardContainer.appendChild(card);
    });
}

// Llamar a la función cuando la página se haya cargado
window.onload = generateCards;
