import React from "react";
import "../styles/header.css";

function Header({ scrollToSection, frontPageRef, aboutRef, projectRef, contactRef }) {
  return (
    <div className="headerDiv">
      <button onClick={() => scrollToSection(frontPageRef)}>
        <h2>01 &nbsp; Frontpage</h2>
      </button>
      <button onClick={() => scrollToSection(aboutRef)}>
        <h2>02 &nbsp; About</h2>
      </button>{" "}
      <button onClick={() => scrollToSection(projectRef)}>
        <h2>03 &nbsp; Projects</h2>
      </button>{" "}
      <button onClick={() => scrollToSection(contactRef)}>
        <h2>04 &nbsp; Contact</h2>
      </button>
    </div>
  );
}
export default Header;
