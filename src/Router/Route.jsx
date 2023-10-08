import React from 'react';
import { createBrowserRouter, useLoaderData } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Layout/Home/Home';
import Statistics from '../Layout/Statistics/Statistics';
import Donation from '../Layout/Dontaion/Donation';
import Card from '../component/Cards/Card';

import ErrorPage from './ErrorPage';
import { Result } from 'postcss';
import Hello from '../Layout/result/Hello';
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
        element:<Hello></Hello>,
        loader:()=>fetch('/data.json')
   
      }
    ]
  }
])

export default Route;