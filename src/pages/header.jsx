import React, { useRef } from 'react';
import '../styles/header.css';

const Header = React.forwardRef(({ scrolldiv5 }, contactRef) => {

    return(
        <div className='headerDiv'>
            <div className='line'></div>
            <div className='headerText1'>
                <p>Media Technology @ KTH {"\xa0"}{"\xa0"}{"\xa0"}{"\xa0"}{"\xa0"} Intern @ Skry</p>
            </div>
            <div className='headerText2'>
                <p>Stockholm</p>
                <button className='sayhi' onClick={scrolldiv5}>Say hi</button>
            </div>
        
        </div>
    );
});
export default Header;