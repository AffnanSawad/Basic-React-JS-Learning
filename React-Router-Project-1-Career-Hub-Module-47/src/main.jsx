import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Jobdetails from './components/JobDetails/Jobdetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,


    errorElement: <ErrorPage></ErrorPage>,

  children: [

  {
    path: '/',

    element: <Home></Home>
  },

  {
    path: '/applied',

    element: <AppliedJobs></AppliedJobs>
  },
  {
    path: '/job/:id',
     
   

    element: <Jobdetails></Jobdetails>,

    loader: () => fetch('./data.json')
  }

  ]


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
