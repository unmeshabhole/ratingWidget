import React from "react";
import "./Rating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import RatingIcon from "./RatingIcon.jsx";

const Rating = () => {
  const [rating, setRating] = React.useState(0);

  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <div>
      <div>
        <h1>Rating Widget</h1>
      </div>
      <div className="box flex">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
              key={index}
              index={index}
              rating={rating}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </div>
      <div id="thanksDiv" className={rating > 0 ? "showDiv" : "hideDiv"}>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
        <span>Thanks! You rated this {rating} stars.</span>
      </div>
    </div>
  );
};
export default Rating;
