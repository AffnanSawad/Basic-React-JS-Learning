import { useNavigate } from "react-router-dom";


const Errorpage = () => {

  const navigate =  useNavigate();

  const handleback = () => {
     
    navigate(-1);
  }

    return (
        <div>
            <h1>NOT FOUND</h1>

        <button  style={{backgroundColor:'red'}} onClick={handleback}>BACK</button>

        </div>
    );
};

export default Errorpage;