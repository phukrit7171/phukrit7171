function renderProfileCards() {
    const container = document.getElementById('profile-cards-container');
    if (!container) {
        console.error("Profile cards container not found.");
        return;
    }

    profiles.forEach(profile => {
        const card = document.createElement('section');
        card.className = 'liquid-glass glass-effect rounded-2xl p-6 md:p-8';
        card.innerHTML = `
            <div class="liquid-content">
                <div class="scan-line"></div>
                <figure class="mb-4 md:mb-6 flex justify-center">
                    <div class="profile-img-container w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative overflow-hidden">
                        <img src="${profile.imgProfile}" alt="${profile.name}" class="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-cyber-primary object-cover relative z-10">
                    </div>
                </figure>
                <h3 class="text-lg md:text-xl font-orbitron mb-3 md:mb-4 neon-text-secondary text-center">${profile.name}</h3>
                <p class="mb-4 md:mb-6 text-gray-300 text-sm md:text-base text-center">${profile.aboutMe}</p>
                <div class="grid grid-cols-1 gap-2 text-center">
                    <div>
                        <h4 class="font-bold text-cyber-light mb-1 text-sm">LOCATION</h4>
                        <p class="text-xs md:text-sm">${profile.location}</p>
                    </div>
                    <div>
                        <h4 class="font-bold text-cyber-light mb-1 text-sm">EMAIL</h4>
                        <p class="text-xs md:text-sm">${profile.email}</p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProfileCards);
