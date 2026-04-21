import React from 'react';
import '../styles/GradePicker.css';

const GradePicker = ({ onSelect, onBack }) => {
  const grades = [
    { id: 'g1', name: 'Grade 1', status: 'active', icon: '🌱', color: '#4CAF50' },
    { id: 'g2', name: 'Grade 2', status: 'locked', icon: '🌿', color: '#FF9800' },
    { id: 'g3', name: 'Grade 3', status: 'locked', icon: '🌳', color: '#2196F3' },
  ];

  return (
    <div className="grade-page">
      <button className="back-circle" onClick={onBack}>←</button>
      
      <div className="grade-selection-area">
        {grades.map((grade) => {
          const isLocked = grade.status === 'locked';
          
          return (
            <button 
              key={grade.id} 
              className={`grade-monster-card ${isLocked ? 'is-locked' : ''}`}
              style={{ '--bg-color': isLocked ? '#cbd5e0' : grade.color }}
              onClick={() => !isLocked && onSelect(grade.id)}
            >
              <div className="grade-visual">
                <span className="grade-emoji">{isLocked ? '🔒' : grade.icon}</span>
              </div>
              <div className="grade-text">
                <h3>{grade.name}</h3>
                <span>{isLocked ? 'Coming Soon' : 'Ready to Learn!'}</span>
              </div>
              {!isLocked && <div className="go-arrow">GO!</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GradePicker;