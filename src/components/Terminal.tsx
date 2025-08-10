import React, { useEffect, useState } from 'react';

const terminalLines = [
  "$ neofetch",
  "       /\\         user@innovation-terminal",
  "      /  \\        OS: Arch Linux x86_64",
  "     /\\   \\       Host: Cyberpunk Workstation",
  "    /      \\      Kernel: 6.1.0-arch1-1",
  "   /   ,,   \\     Shell: zsh 5.9",
  "  /   |  |  -\\    Resolution: 3840x2160",
  " /_-''    ''-_\\   WM: Hyprland",
  "",
  "$ cd ~/projects/web3-portfolio",
  "$ npm run deploy:holographic",
  "[INFO] Initializing quantum processors...",
  "[INFO] Loading neural pathways...",
  "[SUCCESS] Holographic projection activated",
  "",
  "$ blockchain status --network ICP",
  "🟢 ICP Network: ACTIVE",
  "🟢 Smart Contracts: DEPLOYED",
  "🟢 WebGL Renderer: OPTIMAL",
  "",
  "$ ai-engine --model photodraw-v2",
  "Loading neural networks... ████████████ 100%",
  "Creative AI modules online",
  "",
  "$ iot-bridge --device ESP32 --protocol MQTT",
  "Scanning for IoT devices...",
  "Found 3 ESP32 modules",
  "Establishing blockchain bridge...",
  "Bridge established ✓",
];

export const Terminal: React.FC = () => {
  const [currentLines, setCurrentLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < terminalLines.length) {
      const timeout = setTimeout(() => {
        setCurrentLines(prev => [...prev, terminalLines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setCurrentLines([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, currentLines]);

  return (
    <div className="terminal-bg">
      <div className="terminal-content">
        {currentLines.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
        <div className="terminal-cursor">_</div>
      </div>
    </div>
  );
};