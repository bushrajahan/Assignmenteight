import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Notice = (card) => {
  const data = useLoaderData();
  console.log(data)
  // console.log(value); // Logging the value to the console
  console.log(card)
  return (
    <div>
      <p>hii this is bushra</p>
    </div>
  );
};

export default Notice;
