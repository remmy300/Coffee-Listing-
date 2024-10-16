import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
const Card = ({ image, name, price, rating, votes, popular, available }) => {
  return (
    <>
      <div className=" p-4 m-4  shadow-md">
        <span className="ml-6 text-white mx-auto">
          {available ? "Available Now" : "Not Available"}
        </span>
        <div className=" flex flex-col  ">
          <img
            className="w-full object-cover h-48 rounded-md  "
            src={image}
            alt={name}
          />
          <div className=" p-4 text-center text-white">
            <h2>{name}</h2>
            <p>{price}</p>
            <p className="text-gray-300 flex items-center justify-center">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  color={index < Math.round(rating) ? "gold" : "lightgray"}
                />
              ))}
              <span className="ml-2">{rating}</span>
            </p>
            <p>Votes:{votes}</p>
            {popular && <span className="text-green-500">Popular Choices</span>}
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number.isRequired]),
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number.isRequired]),
  votes: PropTypes.number.isRequired,
  popular: PropTypes.bool.isRequired,
  available: PropTypes.bool.isRequired,
};

export default Card;
