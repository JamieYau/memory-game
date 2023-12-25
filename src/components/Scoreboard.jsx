import PropTypes from "prop-types";
import "../styles/Scoreboard.css";

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <div className="current-score">Score: {currentScore}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};
