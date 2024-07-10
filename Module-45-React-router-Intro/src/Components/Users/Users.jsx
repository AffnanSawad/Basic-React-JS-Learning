import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'

const Users = () => {

    const users = useLoaderData()
    return (
        <div>
            <h1>HELLO USERS: {users.length} </h1>
            
            <div className="container">

        {
            users.map( user => <User
            
             key={user.id}

             user={user}


            ></User> )
        }

            </div>

        </div>
    );
};

export default Users;