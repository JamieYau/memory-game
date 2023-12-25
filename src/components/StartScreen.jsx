import PropTypes from "prop-types";

export default function StartScreen({ onStart }) {
  return (
    <div className="startScreen">
      <h1>NBA Memory Game</h1>
      <p>
        Click on each card only once. After each click, the cards will be
        shuffled. Win by clicking all the cards without clicking the same one
        twice.
      </p>
      <button onClick={() => onStart("easy")}>Easy</button>
      <button onClick={() => onStart("medium")}>Medium</button>
      <button onClick={() => onStart("hard")}>Hard</button>
    </div>
  );
}

StartScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
};
