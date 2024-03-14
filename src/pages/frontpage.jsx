import '../styles/frontpage.css';
import { useRef } from "react";

function FrontPage({ eduRef, expRef, projectRef, otherRef, contactRef, scrolldiv5 }) {

    function scrolldiv() {
        if (eduRef && eduRef.current) {
            eduRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    function scrolldiv2() {
        if (expRef && expRef.current) {
            expRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    function scrolldiv3() {
        if (projectRef && projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    function scrolldiv4() {
        if (otherRef && otherRef.current) {
            otherRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <div className='frontPage'>
      
            <div className="greetDiv">
                <p className='greeting'>
                Hello, I'm<br></br>Matilda Jansson
                </p>
            </div>

            <div className='listDiv'>
                <button onClick={scrolldiv}>
                    01 {"\xa0"} Education
                </button>

                <button onClick={scrolldiv2}>
                    02 {"\xa0"} Experience
                </button>

                <button onClick={scrolldiv3}>
                    03 {"\xa0"} Courses, skills & projects
                </button>

                <button onClick={scrolldiv4}>
                    04 {"\xa0"} Other
                </button>

                <button onClick={scrolldiv5}>
                    05 {"\xa0"} Contact
                </button>
            </div>
        </div>
    );
}
export default FrontPage;
