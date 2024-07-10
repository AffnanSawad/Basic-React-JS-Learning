
import { Link } from 'react-router-dom';
import './user.css'
const User = ({user}) => {


   const {id,name,email} = user;

    return (
        <div className='box'>
            <h1>ID: {id} </h1>

            <h1> NAME : {name}  </h1>

            <hr />

            <h1> EMAIL : {email} </h1>

         {/* details button */}

         <Link to={`/user/${id}`} >
         
          <button className='btn'>Show Details</button>
          
         </Link>


        </div>
    );
};

export default User;