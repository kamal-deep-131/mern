import { createContext, useEffect, useState } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const User = localStorage.getItem("user");

    useEffect(() => {
        if (User) {
            setLogin(true);
        }
    }, [login, setLogin])

    return (
        <authContext.Provider value={{ login, setLogin }}>{children}</authContext.Provider>
    );
};

export { authContext, AuthContextProvider };
