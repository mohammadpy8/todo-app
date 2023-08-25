import React, { createContext, useState } from 'react';

type AuthContextProps = {
    children: React.ReactNode
};

type User = {
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    setUser: (user: null | User) => void
}

export const AuthContext = createContext<AuthContextType | null>(null); 

const AuthContextProvider = ({children}: AuthContextProps) => {
    
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;