const Rating = ({ rating }) => {
  const checkRating = (rating) => {
    rating = rating.toString();
    if (rating.length === 1) {
      rating += ".0";
    }
    return rating.slice(0, 3);
  };

  return <>{checkRating(rating)}</>;
};

export default Rating;
