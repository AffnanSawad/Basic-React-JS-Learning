import { useEffect, useState } from "react";
import Job from "../Job/Job";
import './FeatureJobs.css'


const FeatureJobs = () => {

 
    const [jobs , setjobs] = useState([]);


    const [datalength,setdatalength] = useState(2)


    useEffect(    
        ()=> {

            fetch('data.json')
            .then(res=>res.json())
            .then(data=> setjobs(data))
        }
        
         
        ,[])


    return (
        <div className="mt-10">
        <h1 className="text-5xl text-center font-bold">Featured Jobs:{jobs.length} </h1> 

        <p className="text-center mt-5 mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, porro. </p>


    <div className="container">
       

    {
      jobs.slice(0,datalength ).map( job => <Job
      
       key={job.id}

       job={job}
       
      ></Job>  )
     }

     <div className= {datalength === jobs.length && 'hidden'} >

        <button  
         
         onClick={()=> setdatalength(jobs.length) }

         className="btn btn-error"
        
        >  SHOW ALL JOBS</button>
     </div>
 


    </div>

      
    


     </div>




            
        
    );
};

export default FeatureJobs;