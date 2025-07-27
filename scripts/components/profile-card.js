const profiles = [
    {
        name: "Mr.Phukrit Kittinontana",
        imgProfile: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/488527435_2307019556336372_4362876419344529351_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGM2cVjRfJkj-wDpQfAnPwLVIewle_taNdUh7CV7-1o1wfU_Nq-oGQAnTFz2bCinxAthktGsGeyLusI64M_rcgX&_nc_ohc=BDMm2tZCEyYQ7kNvwFWX0o2&_nc_oc=Adn5WgDIYTz6Mr4eCRq6J5AIhqKX9hXN_AbkUxbpa_q4AtRxCNytpJBYWIoRbm_ctx0&_nc_zt=23&_nc_ht=scontent.fbkk5-3.fna&_nc_gid=00u8dNspa_BIUq4PfgdrWg&oh=00_AfSCi8niw1iWjHdeDoDMFAnq5v-lx7itTMWOkLx2dDvpjA&oe=688C2C3D",
        aboutMe: "A visionary full-stack developer crafting immersive digital experiences with cutting-edge technologies and futuristic design principles.",
        location: "TLIC CAMT CMU",
        email: "phukrit7171@gmail.com"
    }
];

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
