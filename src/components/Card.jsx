import React from 'react';

const Card = props => {
  const { image, id, hovered } = props.card;
  const { onHover, onHoverOut, onCardClick } = props;

  let getClassName = () => {
    
    if (hovered) {
      return "rounded img-thumbnail shadow-lg";
    }
    else {
      return "rounded img-thumbnail shadow-sm";
    }
  }

  return (
    <div className="wrap-img">
      <img
        src={image}
        alt={id}
        className={getClassName()}
        onMouseOver={() => onHover(id)}
        onMouseOut={() => onHoverOut(id)}
        onClick={() => onCardClick(id)}
      />
    </div>
  );
}
 
export default Card;