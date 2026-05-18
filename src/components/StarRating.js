import { useState } from "react";
import Star from "./Star";


function StarRating() {

  const [rating, setRating] = useState(0);

  return (
    <>
      <div className="rating-box">
        <h1>Please, rate our service</h1>
        <div className="rating-stars"></div>
        <h2 className="rating-words"></h2>
      </div>
    </>

  );
}

export default StarRating;
