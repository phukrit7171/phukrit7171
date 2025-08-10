import React from 'react';
import { Container, Code, Zap, Database, Globe, Cpu, Microwave as Microchip, Layers } from 'lucide-react';

const skills = [
  { name: 'Docker', icon: Container, position: { top: '20%', left: '15%' } },
  { name: 'Python', icon: Code, position: { top: '60%', left: '85%' } },
  { name: 'Bun.js', icon: Zap, position: { top: '40%', left: '10%' } },
  { name: 'Embedded Systems', icon: Microchip, position: { top: '80%', left: '20%' } },
  { name: 'Web3', icon: Globe, position: { top: '25%', left: '80%' } },
  { name: 'Blockchain', icon: Layers, position: { top: '70%', left: '75%' } },
  { name: 'IoT', icon: Cpu, position: { top: '15%', left: '60%' } },
];

export const SkillIcons: React.FC = () => {
  return (
    <div className="skill-icons">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="skill-icon"
          style={{
            top: skill.position.top,
            left: skill.position.left,
            animationDelay: `${index * 0.5}s`
          }}
        >
          <skill.icon className="w-6 h-6" />
          <span className="skill-label">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};