// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
    mobileOverlay.classList.add('open');
    mobileMenuButton.classList.add('open');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenuFunc() {
    mobileOverlay.classList.remove('open');
    mobileMenuButton.classList.remove('open');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

mobileMenuButton.addEventListener('click', function(e) {
    e.stopPropagation();
    if (mobileOverlay.classList.contains('open')) {
        closeMobileMenuFunc();
    } else {
        openMobileMenu();
    }
});

closeMobileMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    closeMobileMenuFunc();
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        closeMobileMenuFunc();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            setTimeout(() => {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 300);
        }
    });
});

mobileOverlay.addEventListener('click', function(e) {
    if (e.target === mobileOverlay) {
        closeMobileMenuFunc();
    }
});

// Smooth scrolling for desktop navigation
document.querySelectorAll('nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Skill bar animation on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 500);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    observer.observe(bar);
});

// Create background particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `particle-float ${duration}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileOverlay.classList.contains('open')) {
        closeMobileMenuFunc();
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) {
        closeMobileMenuFunc();
    }
});