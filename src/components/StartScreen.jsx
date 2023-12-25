import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/StartScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo,faXmark } from "@fortawesome/free-solid-svg-icons";

export default function StartScreen({ onStart }) {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="startScreen">
      <div className="title">
        <h1>NBA</h1>
        <h1>Memory Game</h1>
      </div>
      <div className="difficulty-container">
        <button onClick={() => onStart("easy")}>Easy</button>
        <button onClick={() => onStart("medium")}>Medium</button>
        <button onClick={() => onStart("hard")}>Hard</button>
      </div>
      <footer>
        <button onClick={() => setShowInstructions(true)}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
        {showInstructions && (
          <div className="modal">
            <div className="modal-content instructions">
              <p>
                Click on each card only once. After each click, the cards will
                be shuffled. Win by clicking all the cards without clicking the
                same one twice.
              </p>
              <button onClick={() => setShowInstructions(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}

StartScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
};
