// Seleccionar botones de filtro, tarjetas y el campo de búsqueda
const filterButtons = document.querySelectorAll(".filter_bottons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
const searchInput = document.getElementById("searchInput");

// Función para filtrar por botones
const filterCards = (e) => {
    // Remover la clase activa de cualquier botón
    document.querySelector(".filter_bottons button.active")?.classList.remove("active");
    e.target.classList.add("active");
    
    const filter = e.target.dataset.name;

    filterableCards.forEach(card => {
        const matchesFilter = card.dataset.name === filter || filter === "all";
        card.classList.toggle("hide", !matchesFilter);
    });
};

// Función para buscar por título
const searchCards = () => {
    const searchTerm = searchInput.value.toLowerCase();

    filterableCards.forEach(card => {
        const title = card.querySelector(".card_title").innerText.toLowerCase();
        card.classList.toggle("hide", !title.includes(searchTerm));
    });
};

// Eventos de clic en los botones de filtro
filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Evento de búsqueda en el campo de búsqueda
searchInput.addEventListener("input", searchCards);
