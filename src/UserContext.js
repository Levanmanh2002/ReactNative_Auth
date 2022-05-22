import React, {createContext, useContext, useEffect, useState} from 'react';

export const UserContext = createContext({});

export const useUserContext = () => UserContext(UseContext);

export default function UserContextProvider({children}) {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signIn = () => {
        setIsSignedIn(true);
    };

    const signOut = () => {
        setIsSignedIn(false);
    };

    useEffect(() => {

    }, [])

    return (
        <UserContext.Provider
            value={{
                isSignedIn,
                signIn,
                signOut,
            }}>
                {children}
        </UserContext.Provider>
    );
}