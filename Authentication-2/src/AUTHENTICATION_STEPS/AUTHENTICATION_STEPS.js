/* 

HERE ARE THE AUTHENTICATION , PROJECT SETUPT STEPS....

 STEP : 1 => REACT ROUTER WITH [main.jsx] + TAILWIND + DAISY UI SETUP.

 STEP : 2 => CREATE PROJECT IN FIREBASE* => INSTALL FIREBASE => FIREBASE=>
    firebase.config.js e copy link ....

 STEP : 3 => ENABLE SIGN IN METHODS [PASS/EMAIL,GOOGLE,FB ETX] IN AUTHENTICATION..

 STEP : 4 => GO TO DOCS => AUTHENTICATION => WEB => GET STARTED => 
    firebase.config.js file er last e =>
    const auth = getAuth(app);
     export default auth;

STEP : 5 => ROOT, HOME , NAVBAR , REGISTER , LOG IN COMPONENT BANANO .

STEP : 6 => ADD EVENT HANDLER IN LOGIN ,REGISTER FORM . ADD BUTTON SO WE CAN GO TO LOGIN TO REGISTER & REGISTER TO LOGIN.

STEP : 7 => PROVIDER [FOLDER] => AUTHPROVIDER.JSX [FILE]  CREATE KORA.
main.jsx e  =>
<AUTHPROVIDER [FILE NAME] >   
<RouterProvider router={router} />
</AUTHPROVIDER> set kora..


STEP : 8 => CREATE CONTEXT IN AUTHPROVIDER FILE & EXPORT IT.

import { createContext } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    return (
        <AuthContext.Provider value={}>
             
    {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;



STEP : 9 => CREATECONTEXT , USECONTEXT  & ONAUTHSTATECHANDED,PrivateRoute
 [authprovider.jsx , login.jsx,register.jsx,privateroute.jsx]

STEP : 10 => e.target.reset() dile form reset hoye jai.[.then() er mdde dite hbe.]

STEP : 11 => nagigate 













*/