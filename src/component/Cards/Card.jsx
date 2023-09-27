import React from "react";
import { handleClick } from "../Navbar/Banner/Banner";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const {
    card_bg,
    catagory,
    catagory_bg,
    description,
    id,
    picture,
    text,
    text_button_bg,
    title,
  } = card;

  return (
         <Link to={`/card/${id}`}>
             <div onClick={() => handleClick(card)}>
      <div className={`card shadow-xl `} style={{ background: card_bg }}>
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2
            className="card-title w-fit p-2"
            style={{ color: text, background: card_bg }}
          >
            {title}
          </h2>
          <p className="card-title" style={{ color: text }}>
            {description}
          </p>
        </div>
      </div>
    </div>
         
         </Link>
  );
};

export default Card;