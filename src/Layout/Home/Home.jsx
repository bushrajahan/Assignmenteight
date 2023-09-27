
import React, { useEffect, useState } from 'react';
// import Banner from '../../component/Navbar/Banner/Banner';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Card from '../../component/Cards/Card';
import { data } from 'autoprefixer';
const Home = (value) => {
  const [cards,setCards] = useState([]);


  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])
   console.log(cards.data)
   const data = cards.data;
   console.log(value)

  return (

    <div>
       <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/kxq5CkC/pp.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:mr-12 md:whitespace-nowrap font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <div className="form-control  md:ml-24" >
          
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input input-bordered lg:w-11/12"
                
                 />
                <span className="bg-red-600 text-white"  >Search</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
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