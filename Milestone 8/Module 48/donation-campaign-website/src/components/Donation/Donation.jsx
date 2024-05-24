import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Donation = ({ donation }) => {
  const {
    id,
    picture,
    category,
    title,
    price,
    card_bg,
    category_bg,
    text_color,
    button_bg,
  } = donation;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/Card-details/${id}`);
  };
  return (
    <div
      className="card flex-col md:flex-row card-side rounded-lg"
      style={{ backgroundColor: card_bg }}
    >
      <figure>
        <img className="w-full md:w-56 h-full" src={picture} alt={title} />
      </figure>
      <div className="card-body">
        <div
          className="badge rounded-none text-sm font-medium"
          style={{ backgroundColor: category_bg, color: text_color }}
        >
          {category}
        </div>
        <h2
          className="card-title text-xl font-semibold"
          style={{ color: text_color }}
        >
          {title}
        </h2>
        <p className="font-semibold" style={{ color: `${text_color}` }}>
          ${price}
        </p>
        <div className="card-actions justify-start">
          <button
            onClick={handleViewDetails}
            className="btn text-white py-4 px-6 outline-none border-none rounded-md"
            style={{ background: `${button_bg}` }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default Donation;
