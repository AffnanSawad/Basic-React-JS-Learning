import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const LogIn = () => {


    const [loginError, setLogInError] = useState('');

    const [loginSuccess, setLogInSuccess] = useState('');

    // show password

    const [showPassword, setShowPassword] = useState(false)

    const handleLogIn = e => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        // password didgit validation & error message
        if (password.length < 6) {
            setLogInError('password must be in 6 letters');

            return;
        }

        //  password validation throgh REGEX
        if (! /^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {

            setLogInError('your password must containt UPPERCASE And NUMBER');

            return;
        }


        // createemailwithpass

        // jate error/success message ekbar dekanor por cle jai
        setLogInError('');
        setLogInSuccess('');
         

        // new user
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user);

                setLogInSuccess('Log In Successfully')


                // user verification
                sendEmailVerification(result.user)

                .then(()=>{
                    alert('verify your email')
                })
                
            })

            .catch(error => {
                console.error(error);

                setLogInError(error.message)
            })



    }




    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="text-4xl font-bold text-blue-800 text-center  ">
                <h1 className="mb-10">Log In</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">



                    <form onSubmit={handleLogIn} className="card-body"   >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>



                            <div className="relative">


                                <input

                                    // show pass toggle
                                    type={showPassword ? 'text' : 'password'}

                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />

                                {/* show pass  */}

                                <span className=" absolute top-2 right-2" onClick={() => setShowPassword(!showPassword)}>

                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }


                                </span>


                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {
                        loginSuccess && <p className="text-green-500"> {loginSuccess} </p>
                    }
                    {
                        loginError && <p className="text-red-600"> {loginError} </p>
                    }


                </div>
            </div>
        </div>
    );
};

export default LogIn;