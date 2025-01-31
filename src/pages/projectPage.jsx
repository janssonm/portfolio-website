import React from "react";
import { useState } from "react";
import globalImg from "../imgs/lightmode1.png";
import portfolioImg from "../imgs/fotoportfolio screen.png"
import ARImg from "../imgs/ARimg.png"
import colorImg from "../imgs/colorcoded.png"
import portfoliofront from "../imgs/portfoliofront.png"

const ProjectPage = React.forwardRef((props, ref) => {
  return (
    <div className="section" ref={ref}>
      <h1>03 {"\xa0"} Projects</h1>
      <div className="sectionContent">
        <div className="contentColumn2">
        <div className="content">
          <img src={globalImg} alt="Global History display image" />
            <h2>Global History</h2>
            <p>Nov. 2023 - Jan. 2024</p>
            <p>
              An interactive website for exploring historic events around the
              globe
            </p>
            <p>
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
            </p>
          </div>

          <div className="content">
          <img src={colorImg} alt="Global History display image" />
            <h2>
              The Impact of Color-Coded Sustainability Infographics on
              Short-term Memory
            </h2>
            <p>Oct. 2024 - Jan. 2025</p>
            <p>
              A study that explores the impact of color relationships on
              short-term memory and its potential to enhance the retention of
              sustainability-related information.
            </p>
            <p>
              ➔
              <a href="../imgs/DM2350 project report PJ4_a.pdf" download>
                Download project report
              </a>
            </p>
          </div>
          

          
        </div>

        <div className="contentColumn2">
          <div className="content">
          <img src={ARImg} alt="Global History display image" />
            <h2>Escape Safari - an AR escape room</h2>
            <p>Oct. 2024 - Jan. 2025</p>
            <p>
              An AR escape room game on the Apple iPad Pro that explores
              multiple modalities
            </p>
            <p>
              ➔
              <a
                href="https://youtu.be/_j5ZtOXnWBg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo video
              </a>
              <br />➔
              <a href="../imgs/DT2140.pdf" download>
                Download project report
              </a>
            </p>
          </div>

          <div className="content">
            <img src={portfoliofront} alt="Global History display image" />
            <h2>Portfolio website</h2>
            <p>Feb. 2024 - Jan. 2025</p>
            <p>my portfolio</p>
            <p>
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
            </p>
          </div>
          
          </div>

          <div className="contentColumn2">
          <div className="content">
          <img src={portfolioImg} alt="Global History display image" />
            <h2>Photography portfolio</h2>
            <p>June 2024 - Aug. 2024</p>
            <p>A personal project to display my photography work</p>
            <p>
              ➔
              <a href="../imgs/fotoportfolio.pdf" download>
                Download photography portfolio
              </a>
            </p>
          </div>
          </div>
      </div>
    </div>
  );
});

export default ProjectPage;
