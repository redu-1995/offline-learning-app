import './AudioDiscovery.css';

const AudioDiscovery = ({ current, playSound }) => {


  const handlePlay = () => {

    // prevent multiple clicks creating overlapping sounds
    playSound(current.audio);

  };


  return (
    <div className="dictionary-slide animate-in">


      <div className="dictionary-header">


        <h1 className="display-letter">
          {current.big} {current.small}
        </h1>



        <button
          className="play-all-btn"
          onClick={handlePlay}
        >

          🔊 Listen

        </button>


      </div>




      <div className="dictionary-grid">


        {current.subItems?.map((item, idx) => (


          <div
            key={idx}
            className="dictionary-card"
          >


            <div className="image-holder">


              <img
                src={item.image}
                alt={item.name}
                className="dict-img"
              />


            </div>



            <p className="dict-label">

              {item.name}

            </p>


          </div>


        ))}


      </div>


    </div>
  );
};


export default AudioDiscovery;