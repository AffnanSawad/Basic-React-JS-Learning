import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";


const Register = () => {

    const[errorRegister,setErrorRegister] = useState('');
    const [successRegister,setSuccessRegister] = useState('');

    // pass reset

    const emailRef = useRef(null);



  const handleRegister = e => {

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email,password); 

    // 
    setSuccessRegister('');
    setErrorRegister('');


    // Login
    signInWithEmailAndPassword(auth,email,password)

    .then( result => {

        console.log(result.user);

        if(result.user.emailVerified
        ){
            setSuccessRegister('user log in succesffull')
        }
        else{
            alert('give a valid email')
        }
    })


    .catch(error => {
        console.error(error);

        setErrorRegister(error.message)
    })


  }


//   password reset

const handlePasswordReset = () => {

const email = emailRef.current.value;

if(  !email ){

    console.log('provide an email',emailRef.current.value);

    return;
}


sendPasswordResetEmail(auth,email)

.then( () => {

    alert('check your email')
})

.error(error=>{

    console.error(error.message)
})

}



    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
      
      {/* FORM */}
      
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
           
        //    pass reset

        ref={emailRef}
           
          type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a   
            
            // password reset

            onClick={handlePasswordReset}
            
            href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      {
                        successRegister && <p className="text-green-500"> {successRegister} </p>
                    }
                    {
                        errorRegister && <p className="text-red-600"> {errorRegister} </p>
                    }
   

    </div>
  </div>
</div>
    );
};

export default Register;