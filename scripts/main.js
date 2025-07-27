import './components/mobile-menu.js';
import './utils/particles.js';
import './utils/dom-helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileOverlay = document.getElementById('mobile-overlay');
            if (mobileOverlay && mobileOverlay.classList.contains('is-open')) {
                mobileOverlay.classList.remove('is-open');
                document.body.classList.remove('no-scroll');
            }
        });
    });
});
