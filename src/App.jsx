import "./styles/App.css";
import React, { useRef, useEffect, useState } from "react";
import Header from "./pages/header.jsx";
import FrontPage from "./pages/frontpage.jsx";
import EducationPage from "./pages/educationPage.jsx";
import ExperiencePage from "./pages/experiencePage.jsx";
import ProjectPage from "./pages/projectPage.jsx";
import OtherPage from "./pages/other.jsx";
import ContactPage from "./pages/contactPage.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Scrollbar from "smooth-scrollbar";

/* global Gradient */

function App() {
  gsap.registerPlugin(useGSAP);

  const frontPageRef = useRef(null);
  const [isFrontPageVisible, setIsFrontPageVisible] = useState(true);
  const eduRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const otherRef = useRef(null);
  const contactRef = useRef(null);
  const gradientInitialized = useRef(false);
  const scrollbarRef = useRef(null);
  const scrollbarInstance = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js";
    script.async = true;

    const existingScript = document.querySelector(
      `script[src='${script.src}']`
    );
    if (!existingScript) {
      document.body.appendChild(script);
    }

    script.onload = () => {
      if (!gradientInitialized.current) {
        const gradient = new Gradient();
        gradient.initGradient("#canvas");
        gradientInitialized.current = true;
        console.log("Gradient Initialized");
      }
    };

    // Initialize Smooth Scrollbar and store the instance
    scrollbarInstance.current = Scrollbar.init(scrollbarRef.current, {
      alwaysShowTracks: true,
    });

    scrollbarInstance.current.addListener(({ offset }) => {
      // Determine if the FrontPage is in view
      const frontPageHeight = frontPageRef.current.offsetHeight;
      setIsFrontPageVisible(offset.y < frontPageHeight);

      // Show scroll-to-top button when scrolled down 200px
      setShowScrollToTop(offset.y > 200);
    });

    // Cleanup on unmount
    return () => {
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      gradientInitialized.current = false; // Reset gradient initialization flag
      console.log("Script cleaned up and state reset");

      if (scrollbarInstance.current) {
        scrollbarInstance.current.destroy();
      }
    };
  }, []); // This effect runs only once when the component mounts

  function scrollToSection(ref) {
    if (ref && ref.current && scrollbarInstance.current) {
      // Get the top offset of the target element relative to the scrollbar
      const targetOffset = ref.current.offsetTop;
      scrollbarInstance.current.scrollTo(0, targetOffset, 1000); // Use the scrollbar instance
    }
  }

  function scrollToTop() {
    if (scrollbarInstance.current) {
      scrollbarInstance.current.scrollTo(0, 0, 1000); // Scroll to the top in 1000ms
    }
  }

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".greetDiv", { y: 100, opacity: 0 }, 0.5);
    tl.from(".listDiv", { y: 100, opacity: 0 }, 0.5);
  });

  return (
    <div>
      <div
        className="wholePage"
        style={{
          backgroundColor: isFrontPageVisible ? "initial" : "#e7e7e7", // Change background color when FrontPage is not visible
          transition: "background-color 0.5s ease", // Smooth transition
        }}
      >
        <div className="background--custom">
          <canvas id="canvas" />
        </div>
        <div className="header">
          <Header scrollToSection={scrollToSection} contactRef={contactRef} />
        </div>
        <div ref={scrollbarRef} className="page scrollWrapper">
          <div ref={frontPageRef}>
            <FrontPage
              scrollToSection={scrollToSection}
              eduRef={eduRef}
              expRef={expRef}
              projectRef={projectRef}
              otherRef={otherRef}
              contactRef={contactRef}
            />
          </div>
          <EducationPage className="educationPage" ref={eduRef} />
          <ExperiencePage className="experiencePage" ref={expRef} />
          <ProjectPage className="projectPage" ref={projectRef} />
          <OtherPage className="otherPage" ref={otherRef} />
          <ContactPage className="contactPage" ref={contactRef} />
          <div className="footer">Designed and built by Matilda Jansson</div>
        </div>
        {showScrollToTop && (
          <div className="scrollToTop" onClick={scrollToTop}>
            🡹
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
