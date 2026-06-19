import { useState } from 'react';
import './LetterFocus.css';

const LetterFocus = ({ current, playSound }) => {


  const [playingIndex, setPlayingIndex] = useState(null);



  const handlePlay = (audio, index) => {

    if(!audio) return;


    setPlayingIndex(index);


    playSound(audio);


    // reset UI indicator after sound ends
    const tempAudio = new Audio(audio);

    tempAudio.addEventListener(
      "ended",
      () => {
        setPlayingIndex(null);
      }
    );

  };



  return (
    <div className="focus-slide animate-in">


      {/* TITLE */}
      <h3 className="focus-title">
        {current.title}
      </h3>




      {/* GRID */}
      <div className="focus-grid">


        {current.items.map((item, idx) => (


          <div

            key={idx}

            className="mini-card"

            onClick={() =>
              handlePlay(item.audio, idx)
            }

          >



            <div className="mini-image-circle">


              <img

                src={item.image || item.icon}

                alt={item.word}

                className="mini-image"

              />


            </div>




            <p className="mini-word">


              {playingIndex === idx
                ? "🔊"
                : item.word
              }


            </p>



          </div>


        ))}


      </div>


    </div>
  );
};


export default LetterFocus;