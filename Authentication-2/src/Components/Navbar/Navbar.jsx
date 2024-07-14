import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);


  const handleLogOut = ()=>{

    logOut()
    .then(()=>{
      console.log('Sign Out Successfully');
    })
    .catch(error=>{
      console.error(error);
    })
  }

//    Nav Links

 const NavLinks = <>
 
    <li className="font-bold"> <Link to='/'> Home   </Link>   </li>
    {/* <li className="font-bold"> <Link to='/cart'> My Cart   </Link>   </li> */}
    <li className="font-bold"> <Link to='/login'> Log IN   </Link>   </li>
    <li className="font-bold"> <Link to='/register'> Register  </Link>   </li>

      {/* user thakle dekabe navbar e  */}

      {
        user &&  <>

        <li className="font-bold"> <Link to='/order'> Order  </Link>   </li>
       </>
      }
 
 
 </>




    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         
    {NavLinks}



      </ul>
    </div>
    <a className=" text-2xl font-bold">Car-Hub-1.0</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
                


      {NavLinks}

          
    </ul>
  </div>
  <div className="navbar-end">

  {
    user ? <>
    
    <p className="mr-4"> {user.email} </p>
    <a onClick={handleLogOut} className="btn  btn-error">Log Out</a>
    
    </>

    :

    <Link to='/login'> <button className="btn btn-primary">Log In</button>  </Link>
  }

    
  </div>
</div> 
        </div>
    );
};

export default Navbar;
    
        