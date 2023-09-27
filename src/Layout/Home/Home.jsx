import React from 'react';
import Banner from '../../component/Navbar/Banner/Banner';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Card from '../../component/Cards/Card';

const Home = () => {
  const data = useLoaderData();
  const cards = data.data;
 
  // console.log(cards)
  return (

    <div>
      <Banner></Banner>
      <Outlet></Outlet>
      
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
        {
          cards?.map(card =>
          
          
                 <Card card={card} key={card.id} ></Card>
              
           
          
            )
        }
      </div>
    </div>
  );
};

export default Home;