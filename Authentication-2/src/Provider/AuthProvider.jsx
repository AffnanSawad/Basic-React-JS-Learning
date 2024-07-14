import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


// creating CONTEXT 
export const AuthContext = createContext(null);

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null);

    // loading => jate load dile auto onno page e na jai.
    // loading ta private route e set korte hbe...

    const [loading , setloding] = useState(true);

    // create USER from firebase;

    const createUser = (email,password) => {
          
        setloding(true);

        return createUserWithEmailAndPassword(auth,email,password);
    }

    // login / existing user from firebase ;

    const loginUser = (email,password)=>{
         
        setloding(true);


        return signInWithEmailAndPassword(auth, email, password)
    }


    //  Sign_Out from firebase

    const logOut = ()=>{

        setloding(true);


        return signOut(auth);
    }


    // google log in 

    const googleLogin = ()=> {
         
        setloding(true);

        return signInWithPopup(auth, googleprovider);
    }

    

    // onAuthstateChange => state observe kore
    useEffect(     
        ()=> {

        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
              
                setuser(currentUser);

                // jekane user set hoise sekne loading false hbe.

                setloding(false);

            })

            return ()=>{
                unSubscribe()
            }

        }        
        ,[]);


    // value
    const authValues = {user , createUser , loginUser , logOut , loading , googleLogin}
    
   
   
    return (
        <AuthContext.Provider value={authValues}>
             
    {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;