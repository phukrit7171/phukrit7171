tailwind.config = {
    theme: {
        extend: {
            colors: {
                cyber: {
                    primary: '#00ffff',
                    secondary: '#ff00ff',
                    accent: '#ffff00',
                    dark: '#0a0f1a',
                    light: '#00ffaa'
                }
            },
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
                'exo': ['Exo 2', 'sans-serif']
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'wave': 'wave 8s linear infinite',
                'rotate': 'rotate 15s linear infinite'
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                wave: {
                    '0%': { transform: 'translateX(-100%) scaleX(1)' },
                    '50%': { transform: 'translateX(0) scaleX(1.2)' },
                    '100%': { transform: 'translateX(100%) scaleX(1)' }
                },
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                }
            }
        }
    }
}
