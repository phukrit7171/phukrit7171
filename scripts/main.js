import './components/mobile-menu.js';
import './utils/particles.js';
import './utils/dom-helpers.js';
import './components/profile-card.js';
import { renderAllContent } from './utils/content-renderer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderAllContent(); // Render all content from site-config.js
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
