import React from 'react';
import '../styles/SubjectPicker.css';

const SubjectPicker = ({ onSelect }) => {
  const subjects = [
    { 
      id: 'english', 
      name: 'English', 
      icon: '🅰️', 
      desc: 'ABC & Stories',
      color: '#4cc9f0', 
      pattern: 'dots' 
    },
    { 
      id: 'math', 
      name: 'Mathematics', 
      icon: '🧮', 
      desc: 'Numbers & Shapes',
      color: '#ff006e', 
      pattern: 'zig-zag' 
    },
    { 
      id: 'science', 
      name: 'Science', 
      icon: '🌍', 
      desc: 'Our World',
      color: '#3a0ca3', 
      pattern: 'waves' 
    }
  ];

  return (
    <div className="subject-page">
      <header className="subject-hero">
        <div className="buddy-container">
          <span className="buddy-emoji">🦁</span>
          <div className="speech-bubble">
            <h2>Hi there!</h2>
            <p>What do you want to play today?</p>
          </div>
        </div>
      </header>

      <div className="subject-grid">
        {subjects.map((sub) => (
          <button 
            key={sub.id} 
            className={`subject-island ${sub.pattern}`}
            style={{ '--island-color': sub.color }}
            onClick={() => onSelect(sub.id)}
          >
            <div className="island-content">
              <div className="island-icon-wrapper">
                <span className="island-icon">{sub.icon}</span>
              </div>
              <div className="island-text">
                <h3>{sub.name}</h3>
                <p>{sub.desc}</p>
              </div>
              <div className="island-badge">Start</div>
            </div>
            <div className="island-shadow"></div>
          </button>
        ))}
      </div>
      
      {/* Decorative Ethiopian-style bottom border */}
      <div className="ethio-border"></div>
    </div>
  );
};

export default SubjectPicker;