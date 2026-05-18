import { useState } from "react";
import Star from "./Star";


function StarRating(props) {

  const [rating, setRating] = useState(0);
  const starsArray = [0, 1, 2, 3, 4];

  const handleClicks = (index) => {
    const clicked = index + 1;

    if (clicked === rating) {
      setRating(rating - 1);
    } else {
      setRating(clicked);
    }
    props.openDialog();
  }

  return (

    <div className="rating-container">
      <h1>Please, rate our service</h1>
      <ul className="rating-stars">
        {starsArray.map((value, index) => (
          <Star key={index} StarIcon={props.StarIcon} rated={index < rating} onClick={() => handleClicks(index)} />
        ))}
      </ul>
      <h2 className="rating-words">{rating > 0 && props.ratingWords[rating - 1]}</h2>
    </div >


  );
}

export default StarRating;
