document.addEventListener('DOMContentLoaded', function() {

    var navAnimation = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navAnimation.classList.add('scrolled');
        } else {
            navAnimation.classList.remove('scrolled');
        }
    });

    
    const menuToggle = document.querySelector('.menu-toggle');
    const linksNavegation = document.querySelector('.links-navegation');
    const overlay = document.querySelector('.overlay');
    const hamburgerButton = document.querySelector('.hamburger-button');

    function toggleMenu() {
        linksNavegation.classList.toggle('active');
        overlay.classList.toggle('active');
        hamburgerButton.classList.toggle('open');
        const isOpen = linksNavegation.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
        hamburgerButton.setAttribute('aria-expanded', isOpen);
    }

    menuToggle.addEventListener('click', toggleMenu);
    hamburgerButton.addEventListener('click', toggleMenu);

    // Cerrar el menú al hacer clic en un enlace
    linksNavegation.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            toggleMenu();
        }
    });

    // Cerrar el menú al hacer clic en el overlay
    overlay.addEventListener('click', toggleMenu);

    // Cerrar el menú con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && linksNavegation.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (linksNavegation.classList.contains('active') &&
            !linksNavegation.contains(e.target) &&
            !menuToggle.contains(e.target) &&
            !hamburgerButton.contains(e.target)) {
            toggleMenu();
        }
    });
});