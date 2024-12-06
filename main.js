let sidebar = document.querySelector('.sidebar');
let menu = document.querySelector('#menu');
let menuList = sidebar.querySelector('ul');

menu.addEventListener('click', () => {
    menuList.classList.toggle('show');
});
