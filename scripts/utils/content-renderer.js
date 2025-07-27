import { siteConfig } from '../data/site-config.js';

function renderHeader() {
    document.getElementById('header-title').textContent = siteConfig.header.title;
    document.getElementById('mobile-header-title').textContent = siteConfig.header.title;

    const desktopNavLinksContainer = document.getElementById('desktop-nav-links');
    const mobileNavLinksContainer = document.getElementById('mobile-nav-links');

    siteConfig.header.navLinks.forEach(link => {
        const desktopLi = document.createElement('li');
        const desktopA = document.createElement('a');
        desktopA.href = link.href;
        desktopA.className = "nav-link hover:text-cyber-primary transition duration-300";
        desktopA.textContent = link.text;
        desktopLi.appendChild(desktopA);
        desktopNavLinksContainer.appendChild(desktopLi);

        const mobileLi = document.createElement('li');
        const mobileA = document.createElement('a');
        mobileA.href = link.href;
        mobileA.className = "mobile-nav-link";
        mobileA.textContent = link.text;
        mobileLi.appendChild(mobileA);
        mobileNavLinksContainer.appendChild(mobileLi);
    });
}

function renderHero() {
    document.getElementById('hero-main-heading').textContent = siteConfig.hero.mainHeading;
    document.getElementById('hero-sub-heading').textContent = siteConfig.hero.subHeading;
    document.getElementById('hero-description').textContent = siteConfig.hero.description;

    const buttonsContainer = document.getElementById('hero-buttons-container');
    siteConfig.hero.buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = button.className;
        btn.textContent = button.text;
        buttonsContainer.appendChild(btn);
    });
}

function renderAbout() {
    document.getElementById('about-heading').textContent = siteConfig.about.heading;
    document.getElementById('about-sub-heading').textContent = siteConfig.about.subHeading;

    const paragraphsContainer = document.getElementById('about-paragraphs');
    siteConfig.about.paragraphs.forEach(pText => {
        const p = document.createElement('p');
        p.className = "mb-4 md:mb-6 text-base md:text-lg leading-relaxed";
        p.textContent = pText;
        paragraphsContainer.appendChild(p);
    });

    const detailsContainer = document.getElementById('about-details');
    siteConfig.about.details.forEach(detail => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4 class="font-bold text-cyber-light mb-2 md:mb-3 text-lg">${detail.label}</h4>
            <p class="text-base md:text-lg">${detail.value}</p>
        `;
        detailsContainer.appendChild(div);
    });
}

function renderSkills() {
    document.getElementById('skills-heading').textContent = siteConfig.skills.heading;

    document.getElementById('frontend-skills-title').textContent = siteConfig.skills.frontend.title;
    const frontendSkillsContainer = document.getElementById('frontend-skills-container');
    siteConfig.skills.frontend.items.forEach(skill => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between mb-2">
                <span class="text-base md:text-lg">${skill.name}</span>
                <span class="text-base md:text-lg">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.percentage}%"></div>
            </div>
        `;
        frontendSkillsContainer.appendChild(div);
    });

    document.getElementById('backend-skills-title').textContent = siteConfig.skills.backend.title;
    const backendSkillsContainer = document.getElementById('backend-skills-container');
    siteConfig.skills.backend.items.forEach(skill => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between mb-2">
                <span class="text-base md:text-lg">${skill.name}</span>
                <span class="text-base md:text-lg">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.percentage}%"></div>
            </div>
        `;
        backendSkillsContainer.appendChild(div);
    });
}

function renderProjects() {
    document.getElementById('projects-heading').textContent = siteConfig.projects.heading;
    const projectsContainer = document.getElementById('projects-container');

    siteConfig.projects.items.forEach(project => {
        const section = document.createElement('section');
        section.className = 'liquid-glass glass-effect rounded-2xl p-6 md:p-8';
        section.innerHTML = `
            <div class="liquid-content">
                <div class="scan-line"></div>
                <figure class="mb-4 md:mb-6">
                    <div class="w-full h-32 md:h-40 rounded-xl bg-gradient-to-r from-cyber-primary to-cyber-secondary opacity-10 flex items-center justify-center">
                        <span class="text-3xl md:text-4xl">${project.imageEmoji}</span>
                    </div>
                </figure>
                <h3 class="text-lg md:text-xl font-orbitron mb-3 md:mb-4 neon-text-secondary">${project.title}</h3>
                <p class="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4 md:mb-6">
                    ${project.tags.map(tag => `<span class="px-2 py-1 md:px-3 md:py-1 skill-tag ${project.tagColorClass} text-xs md:text-sm rounded-full">${tag}</span>`).join('')}
                </div>
                <button class="w-full py-2 md:py-3 border ${project.buttonBorderColorClass} ${project.buttonTextColorClass} rounded-lg ${project.buttonHoverBgClass} ${project.buttonHoverTextColorClass} transition duration-300 text-sm md:text-base">
                    ${project.buttonText}
                </button>
            </div>
        `;
        projectsContainer.appendChild(section);
    });
}

function renderContact() {
    document.getElementById('contact-heading').textContent = siteConfig.contact.heading;
    document.getElementById('contact-name-label').textContent = siteConfig.contact.formLabels.name;
    document.getElementById('contact-email-label').textContent = siteConfig.contact.formLabels.email;
    document.getElementById('contact-message-label').textContent = siteConfig.contact.formLabels.message;
    document.getElementById('contact-submit-button').textContent = siteConfig.contact.submitButtonText;
}

function renderFooter() {
    const socialLinksContainer = document.getElementById('footer-social-links');
    siteConfig.footer.socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = "text-xl md:text-2xl social-icon";
        a.setAttribute('aria-label', link.ariaLabel);
        a.innerHTML = `<i class="${link.iconClass}"></i>`;
        socialLinksContainer.appendChild(a);
    });
    document.getElementById('footer-copyright').textContent = siteConfig.footer.copyright;
}

export function renderAllContent() {
    renderHeader();
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderContact();
    renderFooter();
}
