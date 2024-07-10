import { useLoaderData, useNavigate } from "react-router-dom";


const Postdetails = () => {

 const postdetails = useLoaderData();

 const navigate = useNavigate();

 const handleGoBack = () => {
       
    navigate(-1);

 }


    return (
        <div>
             <h1> {postdetails.id} </h1>
             <h1> {postdetails.title} </h1>

             <button onClick={handleGoBack}
             
             style={{backgroundColor:'red'}}
             
             >GO Back</button>

        </div>
    );
};

export default Postdetails;