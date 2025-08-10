import React, { useEffect, useState } from 'react';
import { User, Award, Trophy, Zap, Users, GraduationCap } from 'lucide-react';

const milestones = [
  '> [HIGH_SCHOOL] AI Innovator - Bronze Medal',
  '> [YEAR_1] Web3 Competition Finalist',
  '> [YEAR_2] Facilitated ICP & CMU Partnership (MOU)'
];

export const AboutPanel: React.FC = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [displayedMilestones, setDisplayedMilestones] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedMilestones.length < milestones.length) {
        setDisplayedMilestones(prev => [...prev, milestones[prev.length]]);
      } else {
        // Reset and start over
        setDisplayedMilestones([]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [displayedMilestones]);

  return (
    <div className="about-panel">
      <div className="panel-glow"></div>
      <div className="panel-content">
        <div className="panel-header">
          <User className="w-6 h-6 text-cyan-400" />
          <h2 className="panel-title">//USER_PROFILE: PHUKRIT.K</h2>
        </div>

        <div className="profile-image-container">
          <img
            src="https://avatars.githubusercontent.com/u/64061607?s=400&u=9f82546c4d9fd18a70081bb0ec5f30a8d38966de&v=4"
            alt="Phukrit Kittinontana"
            className="profile-image"
          />
        </div>

        <div className="profile-section">
          <div className="status-item">
            <GraduationCap className="w-4 h-4" />
            <span className="status-label">STATUS:</span>
            <span className="status-value">Innovator, Student at DII CAMT, Chiang Mai University</span>
          </div>

          <div className="status-item">
            <Users className="w-4 h-4" />
            <span className="status-label">AFFILIATION:</span>
            <span className="status-value">Web3 Club, CAMT CMU</span>
          </div>
        </div>

        <div className="milestones-section">
          <div className="section-header">
            <Trophy className="w-5 h-5" />
            <span>MILESTONES</span>
          </div>
          <div className="milestones-list">
            {displayedMilestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <span className="milestone-cursor">█</span>
                <span className="milestone-text">{milestone}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-matrix-section">
          <div className="section-header">
            <Zap className="w-5 h-5" />
            <span>SKILL MATRIX</span>
          </div>
          <div className="skill-matrix">
            <div className="skill-item">
              <div className="skill-dot python"></div>
              <span>Python</span>
            </div>
            <div className="skill-item">
              <div className="skill-dot bunjs"></div>
              <span>Bun.js</span>
            </div>
            <div className="skill-item">
              <div className="skill-dot docker"></div>
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <div className="skill-dot podman"></div>
              <span>Podman</span>
            </div>
            <div className="skill-item">
              <div className="skill-dot arch"></div>
              <span>Arch Linux</span>
            </div>
            <div className="skill-item">
              <div className="skill-dot embedded"></div>
              <span>Embedded</span>
            </div>
            <div className="skill-item">
              <div className="skill-dot web3"></div>
              <span>Web3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};