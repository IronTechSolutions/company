// Función para actualizar el subtotal
function updateSubtotal() {
  let subtotal = 0;

  // Recorrer cada tarjeta de material para calcular el total
  document.querySelectorAll('.material-card').forEach(card => {
    const price = parseInt(card.querySelector('.price').textContent.replace('Precio L. ', ''));
    const quantity = parseInt(card.querySelector('.quantity').value) || 0;
    const total = price * quantity;
    subtotal += total;
  });

  // Actualizar el subtotal en el DOM
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.textContent = `${subtotal}`;

  // Habilitar/deshabilitar el botón de compra
  const checkoutButton = document.getElementById('checkoutButton');
  checkoutButton.disabled = subtotal === 0;
}

// Función para limpiar el carrito, sin eliminar el subtotal ni el botón de compra
function clearCart() {
  // Vaciar el contenedor de los ítems del carrito
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  // Restablecer el subtotal
  const subtotalElement = document.getElementById("subtotal");
  subtotalElement.textContent = "0";

  // Deshabilitar el botón de compra
  const checkoutButton = document.getElementById("checkoutButton");
  checkoutButton.disabled = true;

  // Limpiar los valores de los inputs de cantidad y restablecer los totales en las tarjetas
  document.querySelectorAll(".quantity").forEach(input => {
    input.value = ""; // Borrar el valor del input
    const card = input.closest(".material-card");
    const totalElement = card.querySelector(".total");
    totalElement.textContent = "Total: L. 0"; // Restablecer el total de la tarjeta
    card.classList.remove("selected"); // Quitar el fondo resaltado
  });
}

// Asignar la función al botón de limpiar carrito
document.getElementById("clearCartButton").addEventListener("click", clearCart);

// Añadir eventos de actualización automática para cada input de cantidad
document.querySelectorAll(".quantity").forEach(input => {
  input.addEventListener("input", function () {
    const card = this.closest(".material-card");
    const price = parseInt(card.querySelector(".price").textContent.replace("Precio L. ", ""));
    const quantity = parseInt(this.value) || 0;

    // Actualizar el total de la tarjeta
    const totalElement = card.querySelector(".total");
    totalElement.textContent = `Total: L. ${price * quantity}`;

    // Cambiar el fondo de la tarjeta si hay cantidad
    if (quantity > 0) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }

    // Actualizar el subtotal general
    updateSubtotal();
  });
});

// Función para mostrar el modal de alerta
function showModal(message) {
  const modal = document.getElementById("customModal");
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message; // Configura el mensaje
  modal.style.display = "block"; // Muestra el modal
}

// Cerrar el modal al hacer clic en el botón
document.getElementById("modalClose").addEventListener("click", function () {
  const modal = document.getElementById("customModal");
  modal.style.display = "none";
});

// Función para añadir productos al carrito
function addToCart(title, price) {
  const quantityInput = document.querySelector(`.material-card[data-title="${title}"] .quantity`);
  const quantity = parseInt(quantityInput.value) || 0;

  if (quantity <= 0) {
    showModal("Por favor, ingresa una cantidad válida.");
    return;
  }

  const cartItems = document.getElementById("cartItems");
  const existingItem = cartItems.querySelector(`[data-title="${title}"]`);

  if (existingItem) {
    // Actualizar cantidad y total si el producto ya está en el carrito
    const existingQuantity = existingItem.querySelector(".cart-quantity");
    const newQuantity = parseInt(existingQuantity.textContent) + quantity;
    existingQuantity.textContent = newQuantity;
    existingItem.querySelector(".cart-price").textContent = `L. ${newQuantity * price}`;
  } else {
    // Agregar un nuevo producto al carrito
    const cartItemHTML = `
      <div class="cart-item" data-title="${title}">
        <span class="cart-title">${title}</span>
        <span class="cart-quantity">${quantity}</span>
        <span class="cart-price">L. ${quantity * price}</span>
      </div>
    `;
    cartItems.insertAdjacentHTML("beforeend", cartItemHTML);
  }

  // Actualizar el subtotal
  updateSubtotal();
}

// Función para comprar directamente
function buyNow(title, price) {
  const quantityInput = document.querySelector(`.material-card[data-title="${title}"] .quantity`);
  const quantity = parseInt(quantityInput.value) || 0;

  if (quantity <= 0) {
    showModal("Por favor, ingresa una cantidad válida.");
    return;
  }

  const total = price * quantity;
  const message = `Hola, me gustaría comprar ${quantity} unidades de ${title}. El precio total es L. ${total}.`;

  // Abrir WhatsApp con el mensaje preconfigurado
  const whatsappNumber = "+50488118862";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

// Función para agregar nuevos materiales dinámicamente
function addMaterial(title, description, price, imgSrc, imgAlt) {
  const container = document.querySelector(".materials-grid");

  const cardHTML = `
    <div class="material-card" data-title="${title}">
      <div class="image-section">
        <img src="${imgSrc}" alt="${imgAlt}">
        <p class="price">Precio L. ${price}</p>
      </div>
      <div class="info-section">
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="actions">
          <input type="number" min="1" max="100" placeholder="Cantidad" class="quantity">
          <p class="total">Total: L. 0</p>
          <button class="add-to-cart-button" onclick="addToCart('${title}', ${price})">Añadir al carrito</button>
          <button class="buy-now-button" onclick="buyNow('${title}', ${price})">Comprar ahora</button>
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", cardHTML);

  // Añadir el evento de actualización automática al nuevo input
  const newQuantityInput = container.lastElementChild.querySelector(".quantity");
  newQuantityInput.addEventListener("input", function () {
    const card = this.closest(".material-card");
    const price = parseInt(card.querySelector(".price").textContent.replace("Precio L. ", ""));
    const quantity = parseInt(this.value) || 0;
    card.querySelector(".total").textContent = `Total: L. ${price * quantity}`;

    if (quantity > 0) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }

    updateSubtotal();
  });
}

// Función para búsqueda de materiales
function searchMaterials() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.querySelectorAll('.material-card');

  cards.forEach(card => {
    const title = card.querySelector('.info-section h3').textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
}

// Evento de búsqueda
document.getElementById('searchBar').addEventListener('input', searchMaterials);

// Agregar materiales


addMaterial(
  "Cemento Argos",
  "Cemento de alta calidad para acabados decorativos.",
  250,
  "construction-materials/cemento argos.png",
  "Cemento"
);
addMaterial(
  "Varilla A-36 3/8",
  "Varilla de acero común para concreto armado, utilizada en estructuras de baja a media carga.",
  150,
  "https://europer.cl/wp-content/uploads/2019/11/ESPARRAGOS-1020.jpg",
  "Varilla"
);

addMaterial(
  "Varilla HRB-400 3/8",
  "Varilla de acero de alta resistencia con una resistencia mínima de 400 MPa, ideal para estructuras de mayor carga.",
  200,
  "https://omo-oss-image.thefastimg.com/portal-saas/new2023041217472786433/cms/image/9cf52cac-7d9b-4fc6-9187-4d465cd0d03b.jpg",
  "Varilla"
);

addMaterial(
  "Varilla HRB-500 3/8",
  "Varilla de acero de alta resistencia, con resistencia mínima de 500 MPa, utilizada en proyectos de infraestructura pesada.",
  250,
  "https://image.made-in-china.com/2f0j00PvnWYpylHgrD/Hrb-500-Small-Size-Deformed-Reinforced-Iron-Rod-Metal-Bar-Steel-Rebar-for-Building.jpg",
  "Varilla"
);

addMaterial(
  "Varilla Torneada 3/8",
  "Varilla de acero con estrías, utilizada para mejorar la adherencia al concreto en construcciones de mediana a alta resistencia.",
  180,
  "https://ferrebaratillo.com/imagenes/118188.png",
  "Varilla"
);

addMaterial(
  "Varilla Inoxidable 3/8",
  "Varilla de acero inoxidable para ambientes altamente corrosivos, como en plantas industriales o estructuras cerca de la costa.",
  350,
  "https://m.media-amazon.com/images/I/216w9Lg4jqL._AC_UF894,1000_QL80_.jpg",
  "Varilla"
);

addMaterial(
  "Tubería PVC de Media ½",
  "Tubería comúnmente usada para instalaciones de agua potable en viviendas y edificios.",
  45,
  "construction-materials/tuberia-pvc-media.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de 2/4",
  "Tubería utilizada para drenaje de aguas residuales y pluviales, ideal para sistemas de alcantarillado.",
  70,
  "construction-materials/tuberia-pvc-2-4.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC Pluvial 2 a 4",
  "Tubería específica para drenaje de aguas pluviales, resistente a las condiciones exteriores.",
  60,
  "construction-materials/tuberia-pvc-pluvial.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de Presión ½\" a 2\"",
  "Tubería resistente a alta presión, usada para transportar agua potable o en sistemas de riego.",
  90,
  "construction-materials/tuberia-pvc-presion.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de ¾\"",
  "Tubería de diámetro medio, ideal para conexiones de agua en viviendas o pequeños comercios.",
  50,
  "construction-materials/tuberia-pvc-3-4.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de 1\"",
  "Tubería con mayor capacidad, utilizada para instalaciones de agua potable o drenajes más grandes.",
  80,
  "construction-materials/tuberia-pvc-1.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de 1½\"",
  "Tubería más grande, usada para sistemas de agua o drenajes industriales.",
  100,
  "construction-materials/tuberia-pvc-1-5.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC para Cableado Eléctrico (Conduit) ½\"",
  "Tubería para protección de cables eléctricos, resistente a la abrasión y a la intemperie.",
  110,
  "construction-materials/tuberia-pvc-cableado.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC para Gas 1\"",
  "Tubería especializada para el transporte de gas, de alta resistencia a presiones.",
  150,
  "construction-materials/tuberia-pvc-gas.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC Sanitaria 3\"",
  "Tubería diseñada para drenaje sanitario, perfecta para aguas residuales o ventilación de desagües.",
  130,
  "construction-materials/tuberia-pvc-sanitaria.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC Flexible ½\"",
  "Tubería flexible ideal para instalaciones en espacios difíciles de alcanzar.",
  60,
  "construction-materials/tuberia-pvc-flexible.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC para Riego ¾\"",
  "Tubería resistente, ideal para sistemas de riego agrícola o doméstico.",
  85,
  "construction-materials/tuberia-pvc-riego.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC Acuática 1\"",
  "Tubería utilizada para sistemas de piscinas o fuentes, resistente al paso de agua y a altas temperaturas.",
  120,
  "construction-materials/tuberia-pvc-acuatica.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de Alta Resistencia (Sch 40) 1½\"",
  "Tubería de alta resistencia utilizada en sistemas industriales o agrícolas, soporta presiones altas.",
  200,
  "construction-materials/tuberia-pvc-alta-resistencia.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de Alta Resistencia (Sch 80) 2\"",
  "Tubería más gruesa y fuerte, ideal para industrias que necesitan soportar grandes presiones.",
  250,
  "construction-materials/tuberia-pvc-alta-resistencia-2.webp",
  "Tubería PVC"
);

addMaterial(
  "Tubería PVC de Baja Presión 3\"",
  "Tubería económica para sistemas de drenaje sin altas presiones, ideal para uso en exteriores.",
  40,
  "construction-materials/tuberia-pvc-baja-presion.webp",
  "Tubería PVC"
);
addMaterial(
  "Aislante Térmico de Poliestireno",
  "Aislante térmico utilizado en techos, paredes y pisos para mejorar la eficiencia energética.",
  250,
  "construction-materials/aislante-termico.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Bloques de Cemento 15x20x40 cm",
  "Bloques de cemento de alta resistencia para la construcción de muros y estructuras.",
  30,
  "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/120532/public",
  "Materiales de Construcción"
);

addMaterial(
  "Arena Gruesa - 1 Volqueta",
  "Arena gruesa para mezclas de concreto y trabajos de albañilería.",
  150,
  "construction-materials/arena-gruesa.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Arena Fina 1m³",
  "Arena fina ideal para acabados y mezclas de mortero.",
  120,
  "construction-materials/arena-fina.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Grava 1m³",
  "Grava para la fabricación de concreto y otras obras de construcción.",
  180,
  "construction-materials/grava.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Cemento Portland 50kg",
  "Cemento para trabajos generales de construcción.",
  185,
  "construction-materials/cemento.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Cemento Rápido 50kg",
  "Cemento para reparaciones rápidas.",
  210,
  "construction-materials/cemento-rapido.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Cemento Blanco 50kg",
  "Cemento de alta calidad para acabados decorativos.",
  250,
  "construction-materials/cemento-blanco.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Madera de Pino 2\" x 4\"",
  "Madera de pino utilizada para estructuras y acabados de madera.",
  200,
  "construction-materials/madera-pino.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Vidrio Templado 6mm",
  "Vidrio templado de alta resistencia, utilizado en ventanas y muros cortina.",
  500,
  "construction-materials/vidrio-templado.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Teja de Arcilla 30x30 cm",
  "Teja de arcilla para techos, excelente para aislamiento térmico y acústico.",
  350,
  "construction-materials/teja-arcilla.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Tubería PVC Pluvial 2\"",
  "Tubería para drenaje de aguas pluviales, resistente a la intemperie.",
  60,
  "construction-materials/tuberia-pvc-pluvial.webp",
  "Materiales de Construcción"
);

addMaterial(
  "Tubería PVC de Presión 1\"",
  "Tubería de PVC para sistemas de agua potable, soporta alta presión.",
  85,
  "construction-materials/tuberia-pvc-presion.webp",
  "Materiales de Construcción"
);

