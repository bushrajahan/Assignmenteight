import React from 'react';

const Item = ({card}) => {
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
    price
  } = card;
  return (
    <div>
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
          <p className="card-title" >
            {description}
          </p>
          <h2>${price}.00</h2>
          <button className='w-fit p-2' style={{background:text,color:'white'}}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Item;