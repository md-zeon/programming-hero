import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Card({ card }) {
    const { id, picture, title, category, category_bg, card_bg, text_color } = card;
    const navigate = useNavigate();

    const handleCardDetails = () => {
        navigate(`/Card-details/${id}`);
    }

    return (
        <div onClick={handleCardDetails} className="card rounded-lg" style={{ backgroundColor: card_bg }}>
            <figure><img className='h-48 w-full' src={picture} alt={title} /></figure>
            <div className="card-body">
                <div className="badge rounded-none text-sm font-medium" style={{ backgroundColor: category_bg, color: text_color }}>
                    {category}
                </div>
                <h2 className="card-title text-xl font-semibold" style={{ color: text_color }}>
                    {title}
                </h2>
            </div>
        </div>
    );
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;
