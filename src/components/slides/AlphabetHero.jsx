import { useState } from 'react';
import './AlphabetHero.css';

const AlphabetHero = ({ current, playSound }) => {

  const [playingIndex, setPlayingIndex] = useState(null);



  const handlePlay = (audio, index) => {

    if (!audio) return;


    setPlayingIndex(index);


    playSound(audio);


    const tempAudio = new Audio(audio);


    tempAudio.addEventListener(
      "ended",
      () => {
        setPlayingIndex(null);
      }
    );

  };



  return (
    <div className="hero-content fade-in">


      {/* LETTERS */}
      <div className="letter-twins">

        <span className="big-letter">
          {current.big}
        </span>


        <span className="small-letter">
          {current.small}
        </span>

      </div>





      {/* WORD GRID */}

      {current.letters &&
      current.letters.length > 0 && (

        <div className="word-grid">


          {current.letters.map((item, idx) => (


            <div

              key={idx}

              className="word-card"

              onClick={() =>
                handlePlay(item.audio || current.audio, idx)
              }

            >


              <div className="word-circle">


                <img

                  src={item.image}

                  alt={item.word}

                  className="word-image"

                />


              </div>



              <p>

                {playingIndex === idx
                  ? "🔊"
                  : item.word
                }

              </p>



            </div>


          ))}


        </div>

      )}






      {/* FALLBACK */}

      {!current.letters && (

        <div

          className="hero-image-circle"

          onClick={() =>
            handlePlay(current.audio, 0)
          }

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