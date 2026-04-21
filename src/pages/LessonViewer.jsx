import { useState, useEffect } from 'react'; // Added useRef
import '../styles/LessonViewer.css';

const LessonViewer = ({ unitData, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizState, setQuizState] = useState({ selected: null, isCorrect: null });

  const current = unitData[currentIndex];

  const playSound = (path) => {
    if (!path) return;
    new Audio(path).play().catch(() => {});
  };

  useEffect(() => {
    setQuizState({ selected: null, isCorrect: null });
    if (current.audio) playSound(current.audio);
  }, [currentIndex, current.audio]);

  const handleNext = () => {
    if (currentIndex < unitData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };
const handleBack = () => {
  if (currentIndex > 0) {
    // 1. If not on the first slide, just go back one slide
    setCurrentIndex(prev => prev - 1);
  } else {
    // 2. If on the very first slide, exit to the menu
    onComplete(); 
  }
};

  return (
    <div className="viewer-stage">
      {/* 1. TOP NAV: Progress & Exit */}
      <div className="viewer-nav">
        <button className="exit-btn" onClick={onComplete}>✕</button>
        <div className="progress-container">
          <div className="progress-fill" style={{ width: `${((currentIndex + 1) / unitData.length) * 100}%` }}></div>
        </div>
        <span className="coin-count">⭐ {currentIndex * 10}</span>
      </div>

      {/* 2. THE STAGE: Main Content Area */}
      <div className="content-card">
        {current.type === 'alphabet-hero' && (
          <div className="hero-content fade-in">
            <div className="letter-twins">
              <span className="big-letter">{current.big}</span>
              <span className="small-letter">{current.small}</span>
            </div>
            <div className="hero-image-circle" onClick={() => playSound(current.audio)}>
              <span className="hero-emoji">{current.icon}</span>
              <div className="pulse-ring"></div>
            </div>
            <h2 className="hero-word">{current.name}</h2>
          </div>
        )}
        {/* TYPE 2: LETTER FOCUS (Grid of words) */}
{current.type === 'letter-focus' && (
  <div className="focus-slide animate-in">
    <h3 className="focus-title">{current.title}</h3>
    <div className="focus-grid">
      {current.items.map((item, idx) => (
        <div 
          key={idx} 
          className="mini-card" 
          onClick={() => playSound(item.audio)}
        >
          <span className="mini-icon">{item.icon}</span>
          <p className="mini-word">{item.word}</p>
          <div className="tap-to-hear">🔊</div>
        </div>
      ))}
    </div>
  </div>
)}

        {current.type === 'quiz' && (
          <div className="quiz-content fade-in">
            <h3 className="quiz-prompt">{current.question}</h3>
            <div className="options-grid">
              {current.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`opt-btn ${quizState.selected === idx ? (quizState.isCorrect ? 'is-correct' : 'is-wrong') : ''}`}
                  onClick={() => {
                    const correct = idx === current.correct;
                    setQuizState({ selected: idx, isCorrect: correct });
                    playSound(correct ? '/audio/win.mp3' : '/audio/try-again.mp3');
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. FOOTER: Navigation */}
      <div className="viewer-footer">
        <button 
          className="next-btn-mega" 
          onClick={handleNext}
          disabled={current.type === 'quiz' && !quizState.isCorrect}
        >
          {currentIndex === unitData.length - 1 ? 'FINISH! 🎉' : 'NEXT →'}
        </button>
      </div>
      <div className="viewer-nav">
  {/* NEW BACK BUTTON */}
  <button className="nav-back-btn" onClick={handleBack}>
    {currentIndex === 0 ? '✕' : '←'}
  </button>
  
  <div className="progress-container">
    <div className="progress-fill" style={{ width: `${((currentIndex + 1) / unitData.length) * 100}%` }}></div>
  </div>
  
  <span className="coin-count">⭐ {currentIndex * 10}</span>
</div>
    </div>
  );
};

export default LessonViewer;