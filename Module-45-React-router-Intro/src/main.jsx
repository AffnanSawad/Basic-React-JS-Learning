import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";
import Postdetails from "./Components/PostDetails/Postdetails";
import Errorpage from "./Components/Error/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    // ERROR PAGE 

    errorElement: <Errorpage></Errorpage>,


    children: [

  {
    path:'/users',

    //loader

    loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),

    element: <Users></Users>
  },

  {
    path:'/user/:id',

    //loader

    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),

    element: <UserDetails></UserDetails>
  },


  // posts

  {
    path: '/posts',
   
    loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
    
    
    element: <Posts></Posts>
  },


  //detals

  {
    path: '/post/:id',

    loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),

    element: <Postdetails></Postdetails>
  }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
