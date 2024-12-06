// Función para mostrar el carrito y actualizar el subtotal
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const subtotalElement = document.getElementById("subtotal");
    const checkoutButton = document.getElementById("checkoutButton");

    // Limpiar el carrito antes de actualizarlo
    cartItems.innerHTML = '';

    let subtotal = 0;
    let cartContent = '';

    // Recorre cada producto en el carrito y actualiza
    document.querySelectorAll(".cart-item").forEach(item => {
      const title = item.querySelector(".cart-title").textContent;
      const quantity = parseInt(item.querySelector(".cart-quantity").textContent);
      const price = parseInt(item.querySelector(".cart-price").textContent.replace("L. ", ""));

      subtotal += price;
      cartContent += `<p>${title} - Cantidad: ${quantity} - L. ${price}</p>`;
    });

    if (cartContent === '') {
      // Si el carrito está vacío, mostrar mensaje y deshabilitar el botón de checkout
      cartItems.innerHTML = '<strong><p>Detalles de su compra.</p></strong>';
      checkoutButton.disabled = true;

      // Eliminar datos del carrito del localStorage si está vacío
      localStorage.removeItem('cart');  // Suponiendo que los productos están guardados en el localStorage bajo la clave 'cart'
    } else {
      cartItems.innerHTML = cartContent;
      checkoutButton.disabled = false;
    }

    subtotalElement.textContent = `L. ${subtotal}`;
}

// Función de checkout que envía el mensaje por WhatsApp
function checkout() {
    const userName = localStorage.getItem("userName");  // Suponiendo que el nombre está guardado en el localStorage
    if (!userName) {
        alert("Por favor, inicia sesión para realizar la compra.");
        return;
    }

    let cartMessage = `Hola, soy ${userName} y me gustaría comprar los siguientes materiales:\n\n`;

    let totalAmount = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
        const title = item.querySelector(".cart-title").textContent;
        const quantity = parseInt(item.querySelector(".cart-quantity").textContent);
        const price = parseInt(item.querySelector(".cart-price").textContent.replace("L. ", ""));
        
        cartMessage += `${quantity} unidades de ${title}, Total: L. ${price}\n`;
        totalAmount += price;
    });

    cartMessage += `\nTotal a pagar: L. ${totalAmount}`;

    const whatsappNumber = "+50488118862"; // Número al que se enviará el mensaje
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(cartMessage)}`;

    // Abre WhatsApp con el mensaje predefinido
    window.open(whatsappURL, "_blank");
}

// Llamada inicial para actualizar el carrito cuando se cargue la página
updateCart();

// Actualiza el carrito cada vez que se agregue un producto
document.getElementById("cartItems").addEventListener("DOMSubtreeModified", updateCart);

// Función para agregar productos al carrito (esto podría ser parte del código existente)
function addToCart(product) {
    // Obtén los productos actuales del carrito almacenados en localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Agrega el producto al carrito (puedes implementar una lógica para verificar si ya existe)
    cart.push(product);

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualiza la vista del carrito
    updateCart();
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    // Obtén los productos actuales del carrito
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filtra el producto que quieres eliminar
    cart = cart.filter(product => product.id !== productId);

    // Si el carrito está vacío, lo eliminamos del localStorage
    if (cart.length === 0) {
        localStorage.removeItem('cart');
    } else {
        // Guarda el carrito actualizado
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Actualiza la vista del carrito
    updateCart();
}


