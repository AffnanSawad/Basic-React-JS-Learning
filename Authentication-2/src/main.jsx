import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


// REACT ROUTER

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
 './Provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [

   {
    path: '/',
    element: <Home></Home>
   },
   {
    path: '/register',
    element: <Register></Register>
   },
   {
    path: '/login',
    element: <LogIn></LogIn>
   },
   {
    path: '/order',
    element: <PrivateRoute>  <Orders></Orders> </PrivateRoute>
   }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
{/* provider */}

<AuthProvider>

<RouterProvider router={router} />

</AuthProvider>
  

  </React.StrictMode>,
)
