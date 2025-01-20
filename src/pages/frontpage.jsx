import '../styles/frontpage.css';

function FrontPage({ eduRef, expRef, projectRef, otherRef, contactRef, scrollToSection }) {

    return(
        <div className='scrollItem frontPage'>
      
            <div className="greetDiv">
                <p className='greeting'>
                Hello, I'm<br></br>Matilda Jansson
                </p>
            </div>

            <div className='listDiv'>
                <button onClick={() => scrollToSection(eduRef)}>
                    01 {"\xa0"} Education
                </button>

                <button onClick={() => scrollToSection(expRef)}>
                    02 {"\xa0"} Experience
                </button>

                <button onClick={() => scrollToSection(projectRef)}>
                    03 {"\xa0"} Courses, skills & projects
                </button>

                <button onClick={() => scrollToSection(otherRef)}>
                    04 {"\xa0"} Other
                </button>

                <button onClick={() => scrollToSection(contactRef)}>
                    05 {"\xa0"} Contact
                </button>
            </div>
        </div>
    );
}
export default FrontPage;
