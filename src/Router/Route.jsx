import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Layout/Home/Home';
import Statistics from '../Layout/Statistics/Statistics';
import Donation from '../Layout/Dontaion/Donation';
import Card from '../component/Cards/Card';
import Notice from '../component/Alert/Notice';
import ErrorPage from './ErrorPage';
const Route = createBrowserRouter([

  {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
       
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dontaion',
        element:<Donation></Donation>
      },
      {
        path:'/card/:id',
        element:<Notice></Notice>,
   
      }
    ]
  }
])

export default Route;