import "./styles/App.css";
import React, { useRef, useEffect, useState } from "react";
import Header from "./pages/header.jsx";
import FrontPage from "./pages/frontpage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import ProjectPage from "./pages/projectPage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Scrollbar from "smooth-scrollbar";
import jagPaBerg from "./imgs/jagpaberg-bg-gone.png";

/* global Gradient */

function App() {
  gsap.registerPlugin(useGSAP);

  const frontPageRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const gradientInitialized = useRef(false);
  const scrollbarRef = useRef(null);
  const scrollbarInstance = useRef(null);
  const [isFrontPage, setIsFrontPage] = useState(true);
  const [bgOpacity, setBgOpacity] = useState(0);

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

    if (!scrollbarInstance.current) return; // Prevent errors if it's not initialized

    const handleScroll = ({ offset }) => {
      const frontPageHeight = frontPageRef.current.offsetHeight;
      const newOpacity = Math.min(offset.y / frontPageHeight, 1);
      setBgOpacity(newOpacity);
    };

    scrollbarInstance.current.addListener(handleScroll);
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

      scrollbarInstance.current.removeListener(handleScroll);
    };
  }, []); // This effect runs only once when the component mounts

  function scrollToSection(ref) {
    if (ref && ref.current && scrollbarInstance.current) {
      // Get the top offset of the target element relative to the scrollbar
      const targetOffset = ref.current.offsetTop;
      scrollbarInstance.current.scrollTo(0, targetOffset, 1000); // Use the scrollbar instance
    }
  }

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".greeting", { y: 20, opacity: 0 }, 0.5);
  });

  return (
    <div>
      <div className="background--custom">
        <canvas id="canvas" />
      </div>

      <div className="lightBg" style={{ opacity: bgOpacity }}></div>

      <div className="header">
        <Header
          scrollToSection={scrollToSection}
          frontPageRef={frontPageRef}
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
      </div>

      <div ref={scrollbarRef} className="page">
        <FrontPage ref={frontPageRef} />
        <AboutPage ref={aboutRef} />
        <ProjectPage ref={projectRef} scrollToSection={scrollToSection} />
        <ContactPage ref={contactRef} />

        <div className="footer">
          <p className="footerText">Designed and built by Matilda Jansson</p>
          <img src={jagPaBerg} alt="Me on a big rock" className="meOnRock" />
        </div>
      </div>
    </div>
  );
}

export default App;
