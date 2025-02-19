import React from "react";
import "../styles/contactpage.css";

const ContactPage = React.forwardRef((props, ref) => {
  return (
    <div className="section" id="contactPage" ref={ref}>
      <h1>04 {"\xa0"} Contact</h1>
      <div className="content">
        <p>Email</p>
        <p>
          ➔{" "}
          <a
            href="mailto:janssonmatilda01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            janssonmatilda01@gmail.com
          </a>
        </p>
      </div>
      <div className="content">
        <p>LinkedIn</p>
        <p>
          ➔{" "}
          <a
            href="https://www.linkedin.com/in/matilda-jansson-23635a23a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @matildajansson
          </a>
        </p>
      </div>
      <div className="content">
        <p>GitHub</p>
        <p>
          ➔{" "}
          <a
            href="https://github.com/janssonm"
            target="_blank"
            rel="noopener noreferrer"
          >
            @janssonm
          </a>
        </p>
      </div>
    </div>
  );
});
export default ContactPage;
