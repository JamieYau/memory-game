import PropTypes from "prop-types";

export default function Card({ name, imageUrl, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={imageUrl} alt={name} className="card-image" />
            <div className="card-name">{name}</div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
