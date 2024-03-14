
import React, { useRef } from "react";

const ProjectPage = React.forwardRef((props, ref) => {
  return (
    <div className="itemPage" ref={ref}>
      <h1>Courses, skills & projects</h1>
      <div className="items">
        <div className="item">
          <h2>
            DH2642 Interaction Programming and the Dynamic Web 7.5 credits
          </h2>
          <h4>
            My project team developed a web application using JavaScript in an
            MVP architecture. React was used as framework and Firebase for the
            database.
            <br />
            <a href="https://gits-15.sys.kth.se/cananau/global-history">
              Git link
            </a>
            <br />
            <a href="https://matdrox.github.io/global-history/">
              Deployed link
            </a>
          </h4>
        </div>
        <div className="item">
          <h2>DD1320 Applied Computer Science 6.0 credits</h2>
          <h4>In this advanced Python course, data structures
            and algorithms were the main focus.</h4>
        </div>
        <div className="item">
          <h2>DM1595 Program Development for
            Interactive Media 7.5 credits</h2>
          <h4>A programming course covering OOP in Python,
            JavaScript, SQL, SuperCollider and Unity.</h4>
        </div>
      </div>
    </div>
  );
});
export default ProjectPage;
