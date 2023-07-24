import React from 'react'
import ReactDOM from 'react-dom'

import {createBrowserRouter,RouterProvider} from "react-router-dom"

import App from './App';

import appRouter from './App';



ReactDOM.render(
      <RouterProvider router={appRouter} />,
     
     document.getElementById('root')
  );

 //
