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
              During my internship, I contributed to the development of web
              applications in an agile environment. Collaborating with a team, I
              worked on both front-end and back-end tasks, building features and
              enhancing user interfaces. I gained hands-on experience in
              delivering high-quality web solutions while adhering to best
              development practices.
            </p>
            <p>
              Tools and skills: agile software development, back-end development,
              collaboration, front-end development, Ruby on Rails, Vue
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
