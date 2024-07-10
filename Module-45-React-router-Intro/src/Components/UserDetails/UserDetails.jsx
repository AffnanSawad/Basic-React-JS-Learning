import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {

  const details = useLoaderData();

  const navigate = useNavigate();

  const handleGoBack = () => {
        
     navigate(-1);
 
  }

    return (
        <div>
            <h1> Name : {details.id}  </h1> 
            <h1> Name : {details.name}  </h1> 
            <h1> Name : {details.email}  </h1> 

            <hr />

            <button onClick={handleGoBack}
             
             style={{backgroundColor:'red'}}
             
             >GO Back</button>


        </div>
    );
};

export default UserDetails;