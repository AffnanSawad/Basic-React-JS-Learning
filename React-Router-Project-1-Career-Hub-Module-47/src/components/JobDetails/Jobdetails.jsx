import { useLoaderData, useParams } from "react-router-dom";
// REACT-TOAST

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Jobdetails = () => {
   
    // HOW TO SHOW DETAILS......

   const jobs = useLoaderData();

   const {id} = useParams();


//    react-toast

const handleapply = ()=> {

    toast('You have Applied Successfully')
}



   const job = jobs.find(job => job.id == id);


   console.log(job);

  

    return (
        <div>
            <h1>JOB Name: {job.title}  </h1>

            <h1>  {job.company_name} </h1>
            <h1>  {job.location} </h1>
            <h1>  {job.salary} </h1>


            <button onClick={handleapply}  className="btn btn-error">APPLY NOW</button>
       
       
       <ToastContainer />

        </div>
    );
};

export default Jobdetails;