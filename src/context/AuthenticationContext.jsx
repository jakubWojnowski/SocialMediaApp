import {createContext, useEffect, useState} from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        setCurrentUser({id: 1, name: "test", profilePicture: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"});
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