import React, { useEffect, useState } from 'react';
import Banner from '../../component/Navbar/Banner/Banner';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Card from '../../component/Cards/Card';
import { data } from 'autoprefixer';

const Home = () => {
  const [cards,setCards] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])
   console.log(cards.data)
   const data = cards.data;
  return (

    <div>
      <Banner></Banner>
      <Outlet></Outlet>
      
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
        {
          data?.map(card =>
          
          
                 <Card card={card} key={card.id} ></Card>
              
           
          
            )
        }
      </div>
    </div>
  );
};

export default Home;