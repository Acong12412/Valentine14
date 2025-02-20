import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "are you sure?",
  "really sure?",
  "pleaseeee",
  "Don't do this to me",
  "can yaaa",
  "you mean :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoclick() {
    setNoCount(noCount + 1);
  }

  function getNobuttonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bear kissing"
            src="https://media.tenor.com/dTUzNZDjA2IAAAAi/milk-and-mocha.gif"
          />
          <div className="text">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://media1.tenor.com/m/kKQxAIakqIkAAAAC/lpg.gif"
          />
          <div>Will you be my valentine</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              yes
            </button>
            <button onClick={handleNoclick} className="noButton">
              {getNobuttonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
