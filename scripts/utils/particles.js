document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles');

    if (particlesContainer) {
        const numParticles = 50; // Number of particles
        const particleSize = 2; // Size of particles in px

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            // Random size
            const size = Math.random() * particleSize + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Random animation delay and duration
            const delay = Math.random() * 10; // seconds
            const duration = 10 + Math.random() * 10; // seconds
            particle.style.animation = `particle-float ${duration}s linear ${delay}s infinite`;

            particlesContainer.appendChild(particle);
        }
    }
});
