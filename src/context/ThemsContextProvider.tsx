import React, { PropsWithChildren, createContext } from 'react';
import thems from './thems';

export const ThemeContext = createContext(thems); 

type ThemeContextProps = {
    children: React.ReactNode;
};

const ThemsContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <ThemeContext.Provider value={thems}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemsContextProvider;