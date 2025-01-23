import './styles/App.css';
import React, { useRef } from "react";
import Header from './pages/header.jsx';
import FrontPage from './pages/frontpage.jsx';
import EducationPage from './pages/educationPage.jsx';
import ExperiencePage from './pages/experiencePage.jsx';
import ProjectPage from './pages/projectPage.jsx';
import OtherPage from './pages/other.jsx';
import ContactPage from './pages/contactPage.jsx';


function App() {

  const eduRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const otherRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToSection(ref) {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='wholePage'>
      <div className='header'>
      <Header scrollToSection={scrollToSection} contactRef={contactRef} />
      </div>
      <div className='page'>
      <FrontPage 
        scrollToSection={scrollToSection} 
        eduRef={eduRef} 
        expRef={expRef} 
        projectRef={projectRef} 
        otherRef={otherRef} 
        contactRef={contactRef} 
      />
        <EducationPage className="educationPage" ref={eduRef}/>
        <ExperiencePage className="experiencePage" ref={expRef}/>
        <ProjectPage className="projectPage" ref={projectRef}/>
        <OtherPage className="otherPage" ref={otherRef}/>
        <ContactPage className="contactPage" ref={contactRef}/>
        <div className='footer'>Designed and built by Matilda Jansson</div>
      </div>
    </div>
  );
}

export default App ;

