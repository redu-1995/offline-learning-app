import { useState, useEffect, useMemo, useRef } from 'react';
import '../styles/LessonViewer.css';

// Slide Components
import AlphabetHero from '../components/slides/AlphabetHero';
import LetterFocus from '../components/slides/LetterFocus';
import QuizSlide from '../components/slides/QuizSlide';
import AudioDiscovery from '../components/slides/AudioDiscovery';

const LessonViewer = ({ unitData = [], onComplete }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [quizState, setQuizState] = useState({
    selected: null,
    isCorrect: null
  });


  // Store every created audio instance
  const audioRefs = useRef([]);


  // SAFE CURRENT SLIDE
  const current = useMemo(() => {
    return unitData?.[currentIndex] || null;
  }, [unitData, currentIndex]);



  // --------------------------------
  // STOP ALL AUDIO
  // --------------------------------
  const stopAllAudio = () => {

    audioRefs.current.forEach(audio => {

      try {
        audio.pause();
        audio.currentTime = 0;
      } catch(err){
        console.log(err);
      }

    });


    audioRefs.current = [];

  };



  // --------------------------------
  // PLAY AUDIO
  // --------------------------------
  const playSound = (path) => {

    if(!path) return;


    try {

      // stop previous sounds first
      stopAllAudio();


      const audio = new Audio(path);


      // save reference
      audioRefs.current.push(audio);


      audio.play().catch(()=>{});


    } catch(err){

      console.log("Audio error:", err);

    }

  };




  // --------------------------------
  // RESET QUIZ + AUTO AUDIO
  // --------------------------------
  useEffect(()=>{


    if(!current) return;


    // reset quiz state
    setQuizState({
      selected:null,
      isCorrect:null
    });



    // autoplay only normal slides
    if(
      current.type !== "quiz" &&
      current.audio
    ){

      playSound(current.audio);

    }



    // cleanup when leaving slide
    return ()=>{

      stopAllAudio();

    };


  },[currentIndex]);





  // --------------------------------
  // NEXT
  // --------------------------------
  const handleNext = () => {


    stopAllAudio();


    if(currentIndex < unitData.length - 1){

      setCurrentIndex(prev => prev + 1);

    }else{

      onComplete?.();

    }

  };




  // --------------------------------
  // BACK
  // --------------------------------
  const handleBack = () => {


    stopAllAudio();


    if(currentIndex > 0){

      setCurrentIndex(prev => prev - 1);

    }else{

      onComplete?.();

    }

  };




  // --------------------------------
  // EXIT
  // --------------------------------
  const handleExit = () => {

    stopAllAudio();

    onComplete?.();

  };





  // --------------------------------
  // SLIDE RENDER ENGINE
  // --------------------------------
  const renderSlide = () => {


    if(!current){

      return (

        <div className="unknown-slide">

          <h2>No Content</h2>

        </div>

      );

    }



    switch(current.type){


      case "alphabet-hero":

        return (

          <AlphabetHero
            current={current}
            playSound={playSound}
          />

        );



      case "letter-focus":

        return (

          <LetterFocus
            current={current}
            playSound={playSound}
          />

        );



      case "quiz":

        return (

          <QuizSlide

            current={current}

            quizState={quizState}

            setQuizState={setQuizState}

            playSound={playSound}

          />

        );



      case "audio-discovery":

        return (

          <AudioDiscovery

            current={current}

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






  // --------------------------------
  // UI
  // --------------------------------
  return (

    <div className="viewer-stage">


      {/* TOP NAV */}

      <div className="viewer-nav">


        <button
          className="exit-btn"
          onClick={handleExit}
        >
          ✕ Close
        </button>



        <button
          className="nav-back-btn"
          onClick={handleBack}
        >

          {currentIndex === 0 ? "✕" : "←"}

        </button>




        <div className="progress-container">

          <div

            className="progress-fill"

            style={{

              width:
              `${((currentIndex + 1) / unitData.length) * 100}%`

            }}

          />

        </div>




        <span className="coin-count">

          ⭐ {currentIndex * 10}

        </span>


      </div>





      {/* CONTENT */}

      <div className="content-card">

        {renderSlide()}

      </div>





      {/* FOOTER */}

      <div className="viewer-footer">


        <button

          className="next-btn-mega"

          onClick={handleNext}

          disabled={
            current?.type === "quiz" &&
            !quizState.isCorrect
          }

        >

          {
            currentIndex === unitData.length - 1
            ? "FINISH! 🎉"
            : "NEXT →"
          }


        </button>


      </div>


    </div>

  );

};


export default LessonViewer;