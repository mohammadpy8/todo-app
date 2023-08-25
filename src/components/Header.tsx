import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemsContextProvider';

const Header = () => {

    const { primary, secondary } = useContext(ThemeContext);
    
    return (
        <div>
            <h1 style={{ color: primary.main }}>Mohammad</h1>
            <h2 style={{color: secondary.text}}>seyfollahi</h2>
        </div>
    );
};

export default Header;