
import React from 'react';
import '../styles/contactpage.css';

const ContactPage = React.forwardRef((props, ref) => {

    return(
        <div id='contactPage' className='scrollItem itemPage contactPage' ref={ref}>
            <h1>05 {"\xa0"} Contact</h1>
            <div className='items'>
                <div className='item contact'>
                    <h2>Email</h2>
                    <h3>➔ <a href="mailto:janssonmatilda01@gmail.com">janssonmatilda01@gmail.com</a></h3>
                </div>
                <div className='item contact'>
                    <h2>LinkedIn</h2>
                    <h3>➔ <a href="https://www.linkedin.com/in/matilda-jansson-23635a23a/">@matildajansson</a></h3>
                </div>
                <div className='item contact'>
                    <h2>GitHub</h2>
                    <h3>➔ <a href="https://github.com/janssonm">@janssonm</a></h3>
                </div>
            </div>

        </div>
    );
});
export default ContactPage;