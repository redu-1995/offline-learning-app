import { useState, useEffect, useMemo } from 'react';
import '../styles/LessonViewer.css';

// Slide Components
import AlphabetHero from '../components/slides/AlphabetHero';
import LetterFocus from '../components/slides/LetterFocus';
import QuizSlide from '../components/slides/QuizSlide'; // ✅ FIXED IMPORT

const LessonViewer = ({ unitData = [], onComplete }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [quizState, setQuizState] = useState({
    selected: null,
    isCorrect: null
  });

  // ✅ SAFE CURRENT SLIDE (prevents crash)
  const current = useMemo(() => {
    return unitData?.[currentIndex] || null;
  }, [unitData, currentIndex]);

  // -----------------------------
  // AUDIO (SAFE + CONTROLLED)
  // -----------------------------
  const playSound = (path) => {
    if (!path) return;

    try {
      const audio = new Audio(path);
      audio.play().catch(() => {});
    } catch (err) {
      console.log("Audio error:", err);
    }
  };

  // -----------------------------
  // RESET QUIZ + AUTO AUDIO
  // -----------------------------
  useEffect(() => {

    if (!current) return;

    setQuizState({
      selected: null,
      isCorrect: null
    });

    if (current.audio) {
      playSound(current.audio);
    }

  }, [currentIndex, current?.audio]);

  // -----------------------------
  // NEXT
  // -----------------------------
  const handleNext = () => {

    if (currentIndex < unitData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete?.();
    }
  };

  // -----------------------------
  // BACK
  // -----------------------------
  const handleBack = () => {

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      onComplete?.();
    }
  };

  // -----------------------------
  // RENDER SLIDE ENGINE
  // -----------------------------
  const renderSlide = () => {

    if (!current) {
      return (
        <div className="unknown-slide">
          <h2>No Content</h2>
        </div>
      );
    }

    switch (current.type) {

      case 'alphabet-hero':
        return (
          <AlphabetHero
            current={current}
            playSound={playSound}
          />
        );

      case 'letter-focus':
        return (
          <LetterFocus
            current={current}
            playSound={playSound}
          />
        );

      case 'quiz':
        return (
          <QuizSlide
            current={current}
            quizState={quizState}
            setQuizState={setQuizState}
            playSound={playSound}
          />
        );

      default:
        return (
          <div className="unknown-slide">
            <h2>Unknown Slide Type</h2>
            <p>{current.type}</p>
          </div>
        );
    }
  };

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="viewer-stage">

      {/* TOP NAV */}
      <div className="viewer-nav">

        <button
          className="nav-back-btn"
          onClick={handleBack}
        >
          {currentIndex === 0 ? '✕' : '←'}
        </button>

        <div className="progress-container">
          <div
            className="progress-fill"
            style={{
              width: `${((currentIndex + 1) / unitData.length) * 100}%`
            }}
          />
        </div>

        <span className="coin-count">
          ⭐ {currentIndex * 10}
        </span>

      </div>

      {/* MAIN CONTENT */}
      <div className="content-card">
        {renderSlide()}
      </div>

      {/* FOOTER */}
      <div className="viewer-footer">

        <button
          className="next-btn-mega"
          onClick={handleNext}
          disabled={
            current?.type === 'quiz' &&
            !quizState.isCorrect
          }
        >
          {currentIndex === unitData.length - 1
            ? 'FINISH! 🎉'
            : 'NEXT →'}
        </button>

      </div>

    </div>
  );
};

export default LessonViewer;