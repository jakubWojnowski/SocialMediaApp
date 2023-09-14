import {createContext, useEffect, useState} from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        setCurrentUser({id: 1, name: "John Doe", profilePicture: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"});
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);



    return (
        <AuthenticationContext.Provider value={{currentUser, login}}>
            {children}
        </AuthenticationContext.Provider>
    );
};