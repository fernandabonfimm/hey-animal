import React, {useEffect, useState} from "react";
import Api from '../../Firebase/FirebaseConfig';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        Api.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}