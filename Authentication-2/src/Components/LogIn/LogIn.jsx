import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const LogIn = () => {

    //  importing login from authprovider using USECONTEXT();
    const {loginUser , googleLogin} = useContext(AuthContext); 

    // navigate => log in korar por auto niye jabe home / jkno page e
    const navigate = useNavigate();

    //  LOG IN => EVENT_HANDLER 

    const handle_LogIn_Form = e => {
           
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);

        // login 

        loginUser(email,password)

        .then(result=>{
            
          console.log(result.user);
            
            // form reset
            e.target.reset();

            // navigate => kon page e nibe tar jnno
            navigate('/');
        })

        .catch(error=>{
            console.error(error);
        })
   

    }


      // google log in

      const handleGoogle = ()=> {

        googleLogin()

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
            <h1 className="text-5xl font-bold">Log In Now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            
             {/* LOG IN FORM */}
            
            
            <form  onSubmit={handle_LogIn_Form}
            
            className="card-body">


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
                <button className="btn btn-primary">Login</button>
              </div>
            </form> 
             
           
             {/* GOOGLE LOG IN */}
           <p><button onClick={handleGoogle} className="btn btn-warning ml-4">Google</button></p>


        {/* GO TO REGISTER */}
        <p className="ml-4">New Here ? Please <Link to='/register'><button 
         
         className="btn btn-accent mb-4 -mt-4 "
          
        >Register</button></Link> first. </p>

           
        

          </div>

       

        </div>
      </div>
    );
};

export default LogIn;