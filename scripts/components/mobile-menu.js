document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuButton && mobileOverlay && closeMobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileOverlay.classList.add('open');
            mobileMenuButton.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            mobileOverlay.setAttribute('aria-hidden', 'false');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileOverlay.classList.remove('open');
            mobileMenuButton.classList.remove('open');
            document.body.style.overflow = ''; // Restore scrolling
            mobileOverlay.setAttribute('aria-hidden', 'true');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileOverlay.classList.remove('open');
                mobileMenuButton.classList.remove('open');
                document.body.style.overflow = '';
                mobileOverlay.setAttribute('aria-hidden', 'true');
            });
        });
    }
});
