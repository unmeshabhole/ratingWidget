import React from "react";
import "./RatingIcon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function RatingIcon(props) {
  const { index, rating, onSaveRating } = props;
  const fill = rating >= index;
  return (
    <div className="cursor-pointer" onClick={() => onSaveRating(index)}>
      <FontAwesomeIcon
        icon={faStar}
        className={fill ? "color-orange" : "color-grey"}
      />
    </div>
  );
}
export default RatingIcon;
