import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <h1>WELCOME TO THE REACT ROUTER -1 </h1>
            
            <NavLink to={'/users'} 
             style={{marginLeft:'10px'}} >Users</NavLink>
           
           
           
            <NavLink to={'/posts'}
            
            style={{marginLeft:'10px'}}>Posts</NavLink>

        </div>
    );
};

export default Header;