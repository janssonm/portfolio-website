
import React, { useRef } from 'react';

const EducationPage = React.forwardRef((props, ref) => {

    return(
        <div className='itemPage' ref={ref}>
            <h1>Education</h1>
            <div className='items'>
                <div className='item'>
                    <h2>Master of Science in Engineering Program,<br/>
                        Media Technology<br/>
                        300 credits</h2>
                    <h3>KTH Royal Institute of Technology</h3>
                    <h4>2020 -</h4>
                </div>
                <div className='item'>
                    <h2>High School Diploma,<br/>
                        Technology Program</h2>
                    <h3>Polhemsskolan</h3>
                    <h4>2017 - 2020</h4>
                </div>
            </div>

        </div>
    );
});
export default EducationPage;