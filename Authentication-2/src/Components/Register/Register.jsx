import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    // importing & destructuring create user of firebase from authprovider.jsx file by using useContext() method

    const {createUser} = useContext(AuthContext);
    
    
 
 

      //  Register  => EVENT_HANDLER 

      const handle_Register_Form = e => {
           
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,email,password);


        // create a new user 

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
      

    }
  

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            
             {/* LOG IN FORM */}
            
            
            <form  onSubmit={handle_Register_Form}
            
            className="card-body">

                {/* name */}
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
              </div>

             {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>





              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Register</button>
              </div>
            </form>       
        {/* GO TO REGISTER */}
        <p className="ml-4">Already Registered? Please <Link to='/login'><button 
         
         className="btn btn-primary mb-4 -mt-4 "
          
        >Log In</button></Link> Now. </p>

          </div>
        </div>
      </div>
    );
};

export default Register;