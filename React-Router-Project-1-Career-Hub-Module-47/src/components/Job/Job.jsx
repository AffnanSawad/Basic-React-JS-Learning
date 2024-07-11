import { Link } from "react-router-dom";


const Job = ({job}) => {

    const {id,title,image , salary,location,company_name,description}=job;
    return (
        <div className="card bg-base-100 w-96 shadow-xl m-4">
        <figure>
            
            <img src={image} alt="" />

        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl"> {title} </h2>
          <p className="font-extrabold"> {company_name} </p>
          
          <div className="flex">
          
          <p className="font-bold  "> {location} </p>
          <p className="font-bold  "> {salary} </p>

          </div>

          <div className="card-actions ">
            
        <Link to={`/job/${id}`}>
         
        <button className="btn btn-outline btn-accent">Show Details</button>
         
        </Link>


          </div>
        </div>
      </div>
    );
};

export default Job;