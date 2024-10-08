

document.addEventListener('DOMContentLoaded', function() {
    var navAnimation = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navAnimation.classList.add('scrolled');
        } else {
            navAnimation.classList.remove('scrolled');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const linksNavegation = document.querySelector('.links-navegation');
    const overlay = document.querySelector('.overlay');

    function toggleMenu() {
        linksNavegation.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
            linksNavegation.classList.contains('active'));
    }

    menuToggle.addEventListener('click', toggleMenu);

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
});

