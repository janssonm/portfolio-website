import React from 'react';
import '../styles/header.css';

function Header({contactRef, scrollToSection }) {
    return(
        <div className='headerDiv'>
            <div className='line'></div>
            <div className='headerText1'>
                <p>Media Technology @ KTH</p>
            </div>
            <div className='headerText2'>
                <p className='city'>Stockholm</p>
                <button className='sayhi' onClick={() => scrollToSection(contactRef)}>Say hi</button>
            </div>
        
        </div>
    );
}
export default Header;