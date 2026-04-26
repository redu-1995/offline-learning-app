import './LetterFocus.css';

const LetterFocus = ({ current, playSound }) => {
  return (
    <div className="focus-slide animate-in">

      {/* TITLE */}
      <h3 className="focus-title">{current.title}</h3>

      {/* GRID */}
      <div className="focus-grid">

        {current.items.map((item, idx) => (
          <div
            key={idx}
            className="mini-card"
            onClick={() => playSound(item.audio)}
          >

            {/* IMAGE (same pattern as AlphabetHero) */}
            <div className="mini-image-circle">

              <img
                src={item.image || item.icon}
                alt={item.word}
                className="mini-image"
              />

            </div>

            {/* LABEL */}
            <p className="mini-word">{item.word}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default LetterFocus;