import { useEffect, useState } from "react"
import User from "./User"


export default function Users(){
      
    // USESTATE => FETCH ER DATA GULA ARRAY ER MDDHE. TAI USSTATE E EMPTY ARRAY DITE HBE.
    const [users,setusers] = useState([])

    // USEEffect

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setusers(data))
    } ,
        [])

    return(
        <div style={{border:'2px solid green', margin:'10px'}}>
            
            <h1> Name : {users.length}  </h1>

            {/* LOOPING KORE DATA PATHABO => user file e */}

            {
                users.map(user=> <User
                
                user = {user}   key={user.id}
                
                ></User> )
            }

        </div>
    )
}