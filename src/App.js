import React, {useState, useEffect} from "react";
import './App.css';
import PickedScreen from "./components/PickedScreen";
import MakeYourPick from "./components/MakeYourPick.js";
import Rules from "./components/Rules.js";
import Volume from "./components/Volume.js";
import ScoreMenu from "./components/ScoreMenu.js";

function App() {
  const [viewRules, setViewRules] = useState(false);
  const [picked, setPicked] = useState(false);
  const [pickedValue, setPickedValue] = useState("");
  const [housePick, setHousePick] = useState(null);
  const [condition, setCondition] = useState("");
  const [volume, setVolume] = useState(localStorage.getItem("volume") === "true");


  useEffect(() => {
    localStorage.setItem("volume", volume);
    console.log(volume);
  }, [volume])

  const handleVolumeClick = () => {
    setVolume(prevVolume => !prevVolume);
  }

  const handleViewRulesClick = () => {
    setViewRules(prevViewRules => !prevViewRules);
  }

  const handlePickClick = (e) => {
    setPicked(true);
    setPickedValue(e.currentTarget.dataset.pick);
    handleHousePickClick();
  }

  const handleHousePickClick = () => {
    setHousePick(Math.floor((Math.random() * 3) + 1))
  }

  const handleConditionClick = () => {
    if (pickedValue === "paper") {
        if (housePick === 1) {
            //draw
            setCondition("draw");
        } else if (housePick === 2) {
            //you lose
            setCondition("lose");
        } else if (housePick === 3) {
            //you win
            setCondition("win");
        }

    } else if (pickedValue === "scissors") {
        if (housePick === 1) {
            //you win
            setCondition("win");
        } else if (housePick === 2) {
            //draw
            setCondition("draw");
        } else if (housePick === 3) {
            //you lose
            setCondition("lose");
        }

    } else if (pickedValue === "rock") {
        if (housePick === 1) {
            //you lose
            setCondition("lose");
        } else if (housePick === 2) {
            //you win
            setCondition("win");
        } else if (housePick === 3) {
            //draw
            setCondition("draw");
        }
    }
}

  const handlePlayAgainButtonClick = () => {
    setViewRules(false);
    setPicked(false);
    setPickedValue("");
    setHousePick(null);
    setCondition("");
  }

  return (
    <>
      <header className="app__header">
        <ScoreMenu condition={condition} />
      </header>
      <main className="app__main">
        {!picked && (
          <MakeYourPick onPickClick={handlePickClick} />
        )}
        {picked && (
          <PickedScreen 
            pickedValue={pickedValue} 
            housePick={housePick} 
            onConditionClick={handleConditionClick} 
            condition={condition} 
            picked={picked} 
            onPlayAgainButtonClick={handlePlayAgainButtonClick}
            volume={volume} 
          />
        )}
      </main>  
      <footer className="app__footer">
        <Rules viewRules={viewRules} onViewRulesClick={handleViewRulesClick} />
        <Volume volume={volume} onVolumeClick={handleVolumeClick} /> 
      </footer>
    </>
  );
}

export default App;
