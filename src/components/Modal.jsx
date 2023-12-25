import PropTypes from "prop-types";
import "../styles/Modal.css";

export default function Modal({ gameStatus, onRetry }) {
  if (gameStatus === "playing") return null;

  let message = "";
  if (gameStatus === "won") message = "Congratulations! You won!";
  if (gameStatus === "lost") message = "Game over! You clicked a card twice.";

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onRetry}>Retry</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};
