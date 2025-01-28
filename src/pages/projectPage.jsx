import React from "react";
import globalVideo from "../imgs/Comp_2.mp4";

const ProjectPage = React.forwardRef((props, ref) => {
  return (
    <div id="projectPage" className="scrollItem itemPage" ref={ref}>
      <h1>03 {"\xa0"} Projects</h1>
      <div className="items">
        <div className="item project">
          <div className="projText">
            <h2>Global History</h2>
            <h3>Nov. 2023 - Jan. 2024</h3>
            <h4>
              An interactive website for exploring historic events around the
              globe
            </h4>
            <h4>
              ➔
              <a
                href="https://matdrox.github.io/global-history/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <br />➔
              <a
                href="https://github.com/janssonm/global-history"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub link
              </a>
            </h4>
          </div>
{/*           <div className="projImg">
            <video autoPlay muted loop id="myVideo">
              <source src={globalVideo} type="video/mp4"></source>
            </video>
          </div> */}
        </div>
        <div className="item">
          <h2>Escape Safari - an AR escape room</h2>
          <h3>Oct. 2024 - Jan. 2025</h3>
          <h4>
            An AR escape room game on the Apple iPad Pro that explores multiple
            modalities
          </h4>
          <h4>
            ➔
            <a
              href="https://youtu.be/_j5ZtOXnWBg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo video
            </a>
            <br />➔
            <a href="../../public/DT2140.pdf" download>
              Download project report
            </a>
          </h4>
        </div>
        <div className="item">
          <h2>
            The Impact of Color-Coded Sustainability Infographics on Short-term
            Memory
          </h2>
          <h3>Oct. 2024 - Jan. 2025</h3>
          <h4>
            A study that explores the impact of color relationships on
            short-term memory and its potential to enhance the retention of
            sustainability-related information.
          </h4>
          <h4>
            ➔
            <a href="../../public/DM2350 project report PJ4_a.pdf" download>
              Download project report
            </a>
          </h4>
        </div>
        <div className="item">
          <h2>Photography portfolio</h2>
          <h3>A personal project to display my photography work</h3>
          <h4>
            ➔
            <a href="../../public/fotoportfolio.pdf" download>
              Download photography portfolio
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
});
export default ProjectPage;
