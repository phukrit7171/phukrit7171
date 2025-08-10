import React from 'react';
import { Gamepad2, Brain, Cpu } from 'lucide-react';

interface ProjectWidgetProps {
  title: string;
  description: string;
  type: 'game' | 'ai' | 'iot';
}

export const ProjectWidget: React.FC<ProjectWidgetProps> = ({ title, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'game': return <Gamepad2 className="w-8 h-8" />;
      case 'ai': return <Brain className="w-8 h-8" />;
      case 'iot': return <Cpu className="w-8 h-8" />;
    }
  };

  return (
    <div className={`project-widget ${type}-widget`}>
      <div className="widget-glow"></div>
      <div className="widget-content">
        <div className="widget-icon">
          {getIcon()}
        </div>
        <div className="widget-visual">
          {type === 'game' && (
            <div className="game-visual">
              <div className="pixel-character"></div>
              <div className="icp-symbols">
                <span>∞</span>
                <span>◊</span>
                <span>∆</span>
              </div>
              <div className="play-icon">▶</div>
            </div>
          )}
          {type === 'ai' && (
            <div className="ai-visual">
              <div className="neural-brain"></div>
              <div className="paint-strokes">
                <div className="stroke stroke-1"></div>
                <div className="stroke stroke-2"></div>
                <div className="stroke stroke-3"></div>
              </div>
            </div>
          )}
          {type === 'iot' && (
            <div className="iot-visual">
              <div className="esp32-chip"></div>
              <div className="data-streams">
                <div className="stream stream-1"></div>
                <div className="stream stream-2"></div>
                <div className="stream stream-3"></div>
              </div>
              <div className="web3-logo">W3</div>
            </div>
          )}
        </div>
        <div className="widget-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};