import React from "react";
import "./home-image.css";
import { Link } from "react-router-dom";

const HomeImage = ({ image, altName, rating, type, id }) => {
  const checkRating = (rating) => {
    rating = rating.toString();
    if (rating.length === 1) {
      rating += ".0";
    }
    return rating.slice(0, 3);
  };

  return (
    <>
      {image && <div className="card">
        <Link to={`/${type}/${id}`}>
          <img src={image.previewUrl} alt={altName} />
            {rating && <div className="rating">{checkRating(rating)}</div>}
        </Link>
      </div>}
    </>
    
    
  );
};

export default HomeImage;
