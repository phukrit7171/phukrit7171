import React from 'react';
import { Terminal } from './components/Terminal';
import { GlitchText } from './components/GlitchText';
import { ProjectWidget } from './components/ProjectWidget';
import { AboutPanel } from './components/AboutPanel';
import { SkillIcons } from './components/SkillIcons';
import { Scanlines } from './components/Scanlines';
import './styles/animations.css';

function App() {
  return (
    <div className="cyberpunk-portfolio">
      <Scanlines />
      <Terminal />
      <SkillIcons />
      
      <div className="main-content">
        <header className="portfolio-header">
          <GlitchText 
            text="Phukrit Kittinontana / INNOVATOR'S TERMINAL" 
            className="main-headline"
          />
          <p className="subtitle">
            DII CAMT CMU | Full-Stack Developer
          </p>
        </header>

        <div className="main-layout">
          <div className="left-panel">
            <AboutPanel />
          </div>
          
          <div className="right-panel">
            <div className="projects-showcase">
              <ProjectWidget
                type="game"
                title="ICP On-Chain Game"
                description="Project: On-Chain Arcade"
              />
              <ProjectWidget
                type="ai"
                title="PhotoDraw AI App"
                description="Project: PhotoDraw - AI Lead & Creator"
              />
              <ProjectWidget
                type="iot"
                title="IoT-Blockchain Bridge"
                description="Project: ESP32 Layer 2 Node"
              />
            </div>
          </div>
        </div>

        <div className="status-bar">
          <span className="status-item">
            <span className="status-dot active"></span>
            Systems: ONLINE
          </span>
          <span className="status-item">
            <span className="status-dot active"></span>
            Neural Networks: ACTIVE
          </span>
          <span className="status-item">
            <span className="status-dot active"></span>
            Blockchain: SYNCED
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;