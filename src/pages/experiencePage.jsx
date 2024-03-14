import React, { useRef } from 'react';

const ExperiencePage = React.forwardRef((props, ref) => {

    return(
        <div className='itemPage' ref={ref}>
            <h1>Experience & voluntary work</h1>
            <div className='items'>
                <div className='item'>
                    <h2>Skry</h2>
                    <h3>Internship</h3>
                    <h4>Internship as part of the course DM1998 at KTH
                        during spring 2024. Developing web applications
                        using mainly JavaScript with Vue.js as
                        framework for the front-end and Ruby using
                        Ruby on Rails as framework for the back-end. <br/>
                        2020 -</h4>
                </div>
                <div className='item'>
                    <h2>The Board of Communication,
                        Media Technology, KTH</h2>
                    <h3>Social media manager</h3>
                    <h4>Sep. 2022- June 2023</h4>
                </div>
                <div className='item'>
                    <h2>Gävle Kommun</h2>
                    <h3>Substitute Pre-School Teacher</h3>
                    <h4>Sep. 2021 - Aug. 2022</h4>
                </div>
            </div>

        </div>
    );
});
export default ExperiencePage;