import React from "react";

const EducationPage = React.forwardRef((props, ref) => {
  return (
    <div className="section" ref={ref}>
      <h1>02 &nbsp; About</h1>
      <div className="sectionContent">
        <div className="contentColumn">
          <div className="content">
            <h2>Education</h2>
          </div>

          <div className="content">
            <p>
              Master of Science in Engineering, Interactive Media Technology
            </p>
            <p>KTH Royal Institute of Technology</p>
            <p>2020 -</p>
          </div>

          <div className="content">
            <p>
              High School Diploma,
              <br />
              Technology Program with specialization in design & product
              development
            </p>
            <p>Polhemsskolan</p>
            <p>2017 - 2020</p>
          </div>
        </div>

        <div className="contentColumn">
          <div className="content">
            <h2>Experience</h2>
          </div>
          <div className="content">
            <p>Skry</p>
            <p>Internship, fullstack</p>
            <p>Jan. 2024 - May 2024</p>
            <p>
              Internship as part of the course DM1998 at KTH during spring 2024.
              I developed web applications using mainly JavaScript with Vue.js
              as framework for the front-end and Ruby using Ruby on Rails as
              framework for the back-end. <br />
            </p>
            <p>
              ➔
              <a
                href="https://skry.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skry's website
              </a>
            </p>
          </div>

          <div className="content">
            <p>Quarnevalen, KTH</p>
            <p>Graphic designer</p>
            <p>Feb. 2023- May 2023</p>
          </div>

          <div className="content">
            <p>The Board of Communication, Media Technology, KTH</p>
            <p>Social media manager</p>
            <p>Sep. 2022- June 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
});
export default EducationPage;
