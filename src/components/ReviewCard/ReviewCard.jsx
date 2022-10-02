import React from "react";
import './ReviewCard.sass'

const ReviewCard = (props) => {
    const { img, author, title, text } = props
  return (
    <div className="review-card">
      <img
        src={img}
        alt="author"
        className="review-card-author"
      />
      <div className="review-card-content">
        <img
          src="https://cdn.shopify.com/s/files/1/0616/8651/3892/files/Group_116_200x.png?v=1641519992"
          alt="rating"
          className="review-card-rating"
        />
        <h2>{author} <i>verified buyer</i> </h2>
        <h2>{title}</h2>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default ReviewCard;
