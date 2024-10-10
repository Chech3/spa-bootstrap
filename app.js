document.addEventListener('DOMContentLoaded', function () {
    const navAnimation = document.querySelector('.sticky-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const linksNavegation = document.querySelector('.links-navegation');
    const overlay = document.querySelector('.overlay');
    const hamburgerButton = document.querySelector('.hamburger-button');
    const playButtons = document.querySelectorAll('.play-btn');
    const videos = document.querySelectorAll('.video-item');

    // Scroll animation for navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navAnimation.classList.add('scrolled');
        } else {
            navAnimation.classList.remove('scrolled');
        }
    });

    // Toggle menu
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

    // Close menu on link click
    linksNavegation.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            toggleMenu();
        }
    });

    // Close menu on overlay click
    overlay.addEventListener('click', toggleMenu);

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && linksNavegation.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Handle carousel video pausing
    document.getElementById('carouselExampleIndicators').addEventListener('slid.bs.carousel', function () {
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
            video.removeAttribute('controls');
            playButtons.forEach(btn => btn.classList.remove('hidden'));
        });
        
    });

    // Handle play buttons for each video
    playButtons.forEach((btn, index) => {
        const video = videos[index];

        // Play button click
        btn.addEventListener('click', function () {
            video.play();
            video.setAttribute('controls', 'true');
            btn.classList.add('hidden'); // Hide play button
        });

        // Show play button when video pauses
        video.addEventListener('pause', function () {
            if (video.currentTime < video.duration) {
                btn.classList.remove('hidden');
            }
        });

        // Reset controls and show play button when video ends
        video.addEventListener('ended', function () {
            btn.classList.remove('hidden');
            video.removeAttribute('controls');
        });
    });
});
