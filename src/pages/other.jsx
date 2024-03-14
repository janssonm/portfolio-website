
import React, { useRef } from 'react';

const OtherPage = React.forwardRef((props, ref) => {

    return(
        <div className='itemPage' ref={ref}>
            <h1>Other</h1>
            <div className='items'>
                <div className='item'>
                    <h2>Scholarship</h2>
                    <h3>Ljungbergsfonden</h3>
                    <h4>June 2020</h4>
                </div>
                <div className='item'>
                    <h2>Scholarship</h2>
                    <h3>Scholarship for entrepreneurial skills
                        running the young enterprise company Noted UF</h3>
                    <h4>June 2020</h4>
                </div>
                <div className='item'>
                    <h2>Scholarship</h2>
                    <h3>Gymnasieskolans samfond</h3>
                    <h4>June 2019</h4>
                </div>
            </div>

        </div>
    );
});
export default OtherPage;