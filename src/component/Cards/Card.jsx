import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notice from "../Alert/Notice";

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
  
  const navigate = useNavigate()
const handleClick = ( card ) => {
  const addedFavoritesArray = [];
  const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

  //jokhon kisu nai tokhon e if vitor dhukba
  if (!favoriteItems) {
    addedFavoritesArray.push(card);
    localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
  } 
  
  else {


    const isExits = favoriteItems.find((card) => card.id === id);

    
    if (!isExits) {

      addedFavoritesArray.push(...favoriteItems, card);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
     
    } 

    
  }
  navigate(`/card/${card.id}`)
  
}

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
