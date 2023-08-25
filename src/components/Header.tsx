import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemsContextProvider';
import { AuthContext } from '../context/auth/AuthContextProvider';

const Header = () => {

    const { primary, secondary } = useContext(ThemeContext);
    const auth = useContext(AuthContext)
    
    return (
        <div>
            <h1 style={{ color: primary.main }}>Mohammad</h1>
            <h2 style={{ color: secondary.text }}>seyfollahi</h2>
            {auth?.user?.name}
        </div>
    );
};

export default Header;