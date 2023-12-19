import PropTypes from "prop-types";
import Card from "./Card";
import "../styles/CardGrid.css";

export default function CardGrid({ cards, onCardClick }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          imageUrl={card.imageUrl}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
}

CardGrid.propTypes = {
  cards: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
