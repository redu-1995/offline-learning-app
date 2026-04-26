import './QuizSlide.css';

const QuizSlide = ({
  current,
  quizState,
  setQuizState,
  playSound
}) => {
  return (
    <div className="quiz-content fade-in">

      {/* QUESTION */}
      <h3 className="quiz-question">{current.question}</h3>

      {/* OPTIONS */}
      <div className="options-grid">

        {current.options.map((opt, idx) => {

          const isSelected = quizState.selected === idx;
          const isCorrect = quizState.isCorrect;

          return (
            <div
              key={idx}
              className={`quiz-card 
                ${isSelected ? (isCorrect ? 'correct' : 'wrong') : ''}
              `}
              onClick={() => {

                const correct = idx === current.correct;

                setQuizState({
                  selected: idx,
                  isCorrect: correct
                });

                playSound(
                  correct
                    ? '/audio/win.mp3'
                    : '/audio/try-again.mp3'
                );
              }}
            >

              {/* IMAGE OPTION */}
              <div className="quiz-image-circle">

                <img
                  src={opt}
                  alt={`option-${idx}`}
                  className="quiz-image"
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default QuizSlide;