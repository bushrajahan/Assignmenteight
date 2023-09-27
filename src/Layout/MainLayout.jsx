import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home/Home';
import Donation from './Dontaion/Donation';
import Navbar from '../component/Navbar/Navbar';


const MainLayout = () => {
  return (
   
     <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
   
  );
};

export default MainLayout;