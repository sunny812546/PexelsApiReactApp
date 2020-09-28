import React from "react";

const Card = ({ name, price, imgSrc, id, remove }) => {
  return (
    <div>
      {name}
      {price}
      {imgSrc}
      <button
        onClick={() => {
          remove(id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
