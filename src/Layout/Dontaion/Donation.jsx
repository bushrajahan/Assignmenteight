import React, { useState } from 'react';

const Donation = () => {
  
  const seletedItem = JSON.parse(localStorage.getItem('favorites'));
  console.log(seletedItem)
  return (
    <div>
       {
        seletedItem?.map(item =>
          <h1>Hllow world</h1>
        )
       }
    </div>
  );
};

export default Donation;