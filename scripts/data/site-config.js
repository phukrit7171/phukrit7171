export const siteConfig = {
    header: {
        title: "PORTFOLIO",
        navLinks: [
            { text: "HOME", href: "#home" },
            { text: "ABOUT", href: "#about" },
            { text: "SKILLS", href: "#skills" },
            // { text: "TEAM", href: "#profiles" },
            // { text: "PROJECTS", href: "#projects" },
            // { text: "CONTACT", href: "#contact" }
        ]
    },
    hero: {
        mainHeading: "CYBER DEV",
        subHeading: "FULL STACK DEVELOPER",
        description: "Creating immersive digital experiences with cutting-edge technologies and futuristic design principles.",
        buttons: [
            { text: "VIEW PROJECTS", className: "px-6 py-3 md:px-8 md:py-4 bg-cyber-primary text-cyber-dark font-bold rounded-lg neon-button text-base md:text-lg" },
            { text: "DOWNLOAD CV", className: "px-6 py-3 md:px-8 md:py-4 border border-cyber-primary text-cyber-primary font-bold rounded-lg hover:bg-cyber-primary hover:text-cyber-dark transition duration-300 text-base md:text-lg" }
        ]
    },
    about: {
        heading: "ABOUT ME",
        subHeading: "Mr.Phukrit Kittinontana",
        paragraphs: [
            "I'm a passionate full-stack developer specializing in creating futuristic web applications with cutting-edge technologies. My expertise lies in building responsive, high-performance applications with immersive cyberpunk aesthetics.",
            "With a background in both frontend and backend development, I bring ideas to life through clean code and innovative design solutions."
        ],
        details: [
            { label: "LOCATION", value: "CAMT, CMU" },
            { label: "EMAIL", value: "phukrit7171@gmail.com" }
        ]
    },
    skills: {
        heading: "TECHNICAL SKILLS",
        frontend: {
            title: "FRONTEND",
            items: [
                { name: "React.js", percentage: 95 },
                { name: "Vue.js", percentage: 85 },
                { name: "Tailwind CSS", percentage: 90 }
            ]
        },
        backend: {
            title: "BACKEND",
            items: [
                { name: "Node.js", percentage: 90 },
                { name: "Python", percentage: 80 },
                { name: "MongoDB", percentage: 85 }
            ]
        }
    },
    projects: {
        heading: "FEATURED PROJECTS",
        items: [
            {
                imageEmoji: "🌐",
                title: "NEON DASHBOARD",
                description: "A futuristic analytics dashboard with real-time data visualization and cyberpunk aesthetics.",
                tags: ["React", "D3.js", "Node.js"],
                tagColorClass: "text-cyber-primary",
                buttonText: "VIEW PROJECT",
                buttonBorderColorClass: "border-cyber-primary",
                buttonTextColorClass: "text-cyber-primary",
                buttonHoverBgClass: "hover:bg-cyber-primary",
                buttonHoverTextColorClass: "hover:text-cyber-dark"
            },
            {
                imageEmoji: "🤖",
                title: "AI ASSISTANT",
                description: "An intelligent chatbot with natural language processing capabilities and neural network integration.",
                tags: ["Python", "TensorFlow", "Flask"],
                tagColorClass: "text-cyber-secondary",
                buttonText: "VIEW PROJECT",
                buttonBorderColorClass: "border-cyber-secondary",
                buttonTextColorClass: "text-cyber-secondary",
                buttonHoverBgClass: "hover:bg-cyber-secondary",
                buttonHoverTextColorClass: "hover:text-cyber-dark"
            },
            {
                imageEmoji: "🔒",
                title: "BLOCKCHAIN APP",
                description: "A decentralized application for secure transactions with smart contract integration.",
                tags: ["Solidity", "Web3.js", "Ethereum"],
                tagColorClass: "text-cyber-accent",
                buttonText: "VIEW PROJECT",
                buttonBorderColorClass: "border-cyber-accent",
                buttonTextColorClass: "text-cyber-accent",
                buttonHoverBgClass: "hover:bg-cyber-accent",
                buttonHoverTextColorClass: "hover:text-cyber-dark"
            }
        ]
    },
    contact: {
        heading: "CONTACT ME",
        formLabels: {
            name: "NAME",
            email: "EMAIL",
            message: "MESSAGE"
        },
        submitButtonText: "TRANSMIT MESSAGE"
    },
    footer: {
        socialLinks: [
            { iconClass: "fab fa-github", ariaLabel: "GitHub", href: "https://github.com/phukrit7171/" },
            // { iconClass: "fab fa-linkedin", ariaLabel: "LinkedIn", href: "#" },
            // { iconClass: "fab fa-twitter", ariaLabel: "Twitter", href: "#" },
            // { iconClass: "fab fa-discord", ariaLabel: "Discord", href: "#" }
        ],
        copyright: "© 2025 CYBER PORTFOLIO. ALL SYSTEMS OPERATIONAL."
    }
};
