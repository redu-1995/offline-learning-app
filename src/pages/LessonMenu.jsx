import React from 'react';
import '../styles/LessonMenu.css';

const LessonMenu = ({ subjectData, onSelectSection, onBack }) => {
  const unitKeys = Object.keys(subjectData);

  return (
    <div className="adventure-menu">
      {/* Top Navigation */}
      <div className="menu-nav-bar">
        <button className="back-bubble" onClick={onBack}>← Back</button>
        <div className="stars-earned">⭐ 120</div>
      </div>

      <div className="scroll-area">
        <header className="menu-intro">
          <h1 className="adventure-title">English Journey</h1>
          <p className="adventure-subtitle">Choose your next challenge!</p>
        </header>

        {unitKeys.map((unitKey) => {
          const unit = subjectData[unitKey];
          return (
            <div key={unitKey} className="unit-adventure-card">
              <div className="unit-ribbon">
                <span>Unit {unitKey.replace('u', '')}</span>
              </div>
              
              <div className="unit-info">
                <div className="unit-icon-box">📚</div>
                <h2 className="unit-name">{unit.title}</h2>
              </div>

              <div className="path-buttons">
                {Object.keys(unit.sections).map((sectionKey, index) => (
                  <button 
                    key={sectionKey} 
                    className="level-circle"
                    onClick={() => onSelectSection(unit.sections[sectionKey])}
                  >
                    <div className="level-inner">
                      <span className="level-number">{index + 1}</span>
                      <span className="level-play">▶</span>
                    </div>
                    
                    <span className="level-label">Section {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Ethiopian Traditional Pattern Footer */}
      <div className="tibeb-footer"></div>
    </div>
  );
};

export default LessonMenu;