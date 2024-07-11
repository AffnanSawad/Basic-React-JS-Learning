import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
           
           
            <h1>This page is not Availabale . PLEASE turn Back to home</h1>
          
          {/* buttun > link > to > butn name */}
            <button 
            
            style={{backgroundColor:'red',borderRadius:
                '20px', padding:'10px'
            }}> 
             
             
               <Link to='/'>Go Back To Home</Link>  
               
               
                </button>
        </div>
    );
};

export default ErrorPage;