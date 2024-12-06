
    // Verificar si el nombre de usuario existe en localStorage
    const userName = localStorage.getItem('userName');

    if (!userName) {
        // Si no existe, redirigir al login
        window.location.href = 'index.html';
    } else {
        // Mostrar el nombre en el elemento con id 'userNameDisplay'
        document.getElementById('userNameDisplay').innerText = userName;
    }

    // No borrar el localStorage al cerrar la ventana, solo lo eliminamos al hacer logout
    function logout() {
        localStorage.removeItem('userName');
        window.location.href = 'index.html';
    }

    // Toggle del menú en dispositivos móviles
    const menuIcon = document.getElementById('menu');
    const sidebarMenu = document.querySelector('.sidebar ul');

    menuIcon.addEventListener('click', () => {
        sidebarMenu.classList.toggle('active');
    });
    
    // Evento de logout en el botón de "Salir"
    const logoutButton = document.querySelector('.Btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

