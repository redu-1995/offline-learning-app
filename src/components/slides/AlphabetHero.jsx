const AlphabetHero = ({ current, playSound }) => {

  return (
    <div className="hero-content fade-in">

      {/* LETTERS */}
      <div className="letter-twins">
        <span className="big-letter">{current.big}</span>
        <span className="small-letter">{current.small}</span>
      </div>

      {/* ONLY SHOW GRID IF letters EXISTS */}
      {current.letters && current.letters.length > 0 && (
        <div className="word-grid">

          {current.letters.map((item, idx) => (
            <div
              key={idx}
              className="word-card"
              onClick={() => playSound(current.audio)}
            >

              <div className="word-circle">
                <img
                    src={item.image}
                    alt={item.word}
                    className="word-image"
                />
                </div>

              <p>{item.word}</p>

            </div>
          ))}

        </div>
      )}

      {/* FALLBACK (OLD FORMAT SUPPORT) */}
      {!current.letters && (
        <div
          className="hero-image-circle"
          onClick={() => playSound(current.audio)}
        >
          <img
            src={current.icon}
            alt={current.name}
            className="hero-image"
          />
        </div>
      )}

    </div>
  );
};

export default AlphabetHero;