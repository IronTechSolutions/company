 // Verificar si el nombre de usuario existe en localStorage
 if (!userName) {
    // Si no existe, redirigir al login
    window.location.href = 'index.html';
} else {
    // Mostrar el nombre en el elemento con id 'userNameDisplay'
    document.getElementById('userNameDisplay').innerText = userName;
}

// Borrar localStorage al salir de la página
window.addEventListener('beforeunload', function () {
    localStorage.removeItem('userName');
});