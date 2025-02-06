import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "../styles/projectpage.css";

import globalImg from "../imgs/lightmode1.png";
import globalImg2 from "../imgs/lightmode2.png";
import globalImg3 from "../imgs/darkmode1.png";
import globalImg4 from "../imgs/darkmode2.png";

import colorImg from "../imgs/colorcoded.png";
import color2 from "../imgs/color2.png";
import color3 from "../imgs/color3.png";

import ARImg from "../imgs/ARimg.png";
import ARImg2 from "../imgs/multimodala.png";
import ARImg3 from "../imgs/multimodala2.png";
import ARImg4 from "../imgs/multimodala3.png";

import portfolioImg from "../imgs/fotoportfolio screen.png";
import portfolioImg2 from "../imgs/02symmetry.png";
import portfolioImg3 from "../imgs/03architecture.png";
import portfolioImg4 from "../imgs/04observation.png";

import webportfolio from "../imgs/portfoliofront.png";
import webportfolio2 from "../imgs/projects-2.png";
import webportfolio3 from "../imgs/projects.png";
import webportfolio4 from "../imgs/projects-1.png";

const initialProjects = [
  {
    id: 1,
    title: "Global History",
    img: globalImg,
    alt: "Global History project",
    date: "Nov. 2023 - Jan. 2024",
    description: "An interactive website for exploring historic events worldwide. As the designer and front-end developer, I created a cohesive design and prototype that ensured visual consistency and streamlined implementation, reducing development time. The project won a UX design prize ",
    skills: "collaboration, Figma, React, web design",
    links: [
      { text: "Website", url: "https://matdrox.github.io/global-history/" },
      {
        text: "GitHub link",
        url: "https://github.com/janssonm/global-history",
      },
    ],
    detailimg: [globalImg2, globalImg3, globalImg4],
  },
  {
    id: 2,
    title: "Escape Safari - an AR escape room",
    img: ARImg,
    alt: "Escape safari",
    date: "Oct. 2024 - Jan. 2025",
    description:
      "An AR escape room game developed for the Apple iPad Pro, exploring and comparing multiple interactive modalities. I worked with my team to design and develop the game, conducted user testing, and wrote a report analyzing the results.",
      skills: "Blender, collaboration, user research ",
    links: [
      { text: "Demo video", url: "https://youtu.be/_j5ZtOXnWBg" },
      {
        text: "Open project report",
        url: process.env.PUBLIC_URL + "/DT2140.pdf",
      },
    ],
    detailimg: [ARImg2, ARImg3, ARImg4],
  },
  {
    id: 3,
    title: "Photography portfolio",
    img: portfolioImg,
    alt: "Photography portfolio",
    date: "June 2024 - Aug. 2024",
    description: [
      "A personal project to showcase my photography and practice graphic design. Inspired by",
      <em key="italic">Grid Systems in Graphic Design</em>,
      " by Joseph Müller-Brockmann, I applied grid-based layouts, typography, and composition techniques to create a structured and visually cohesive design."
    ],
    skills: "Figma, graphic design, photography",
    links: [
      {
        text: "Open photography portfolio",
        url: process.env.PUBLIC_URL + "/fotoportfolio.pdf",
      },
    ],
    detailimg: [portfolioImg2, portfolioImg3, portfolioImg4],
  },
  {
    id: 4,
    title:
      "The Impact of Color-Coded Sustainability Infographics on Short-term Memory",
    img: colorImg,
    alt: "Short-term memory",
    date: "Oct. 2024 - Jan. 2025",
    description:
      "A study on the impact of color relationships on short-term memory, focusing on sustainability-related information. Using the United Nations' Sustainable Development Goals (SDGs) and their color-coded infographics, my project group and I designed a memory game to evaluate how different color pairings influence recall. Through user testing and accuracy analysis, we explored whether harmonious or complementary colors enhance memory retention of sustainability concepts.",
      skills: "collaboration, user research, UX design",
    links: [
      {
        text: "Open project report",
        url: process.env.PUBLIC_URL + "/DM2350%20project%20report%20PJ4_a.pdf",
      },
    ],
    detailimg: [color2, color3],
  },
  {
    id: 5,
    title: "Portfolio website",
    img: webportfolio4,
    alt: "Portfolio website",
    date: "Feb. 2024 - Feb. 2025",
    description: "A personal portfolio website showcasing my work. Through this project, I refined my skills in UI/UX design, responsive web development, and interactive elements. It serves as both a portfolio and a creative space to experiment with design principles, animations, and modern web technologies.",
    skills: "Figma, front-end development, GSAP, React, UI/UX design",
    links: [],
    detailimg: [webportfolio2, webportfolio3, webportfolio],
  },
];

/* const useGSAP = (callback, deps) => {
  useEffect(() => {
    callback();
  }, deps); // Pass dependencies as an array
}; */

const ProjectPage = React.forwardRef(({ scrollToSection }, ref) => {
  const [projects, setProjects] = useState(initialProjects);
  const [expandedId, setExpandedId] = useState(null);
  const [lastClickedId, setLastClickedId] = useState(null);

  const toggleExpand = (id) => {
    // Check if the screen width is greater than 768px (non-mobile)
    if (window.innerWidth > 768) {
      if (expandedId === id) {
        // Collapse the expanded project and reset order
        setExpandedId(null);
        setProjects(initialProjects);
      } else {
        // Expand new project and move it to the top
        setExpandedId(id);
        setLastClickedId(id);
  
        // Move clicked project to the top while keeping order intact (only for larger screens)
        setProjects((prevProjects) => {
          const clickedProject = prevProjects.find((proj) => proj.id === id);
          const otherProjects = prevProjects.filter((proj) => proj.id !== id);
          return [clickedProject, ...otherProjects]; // Move clicked project to the start
        });
      }
  
      // Scroll to the section after expanding the project (only for larger screens)
      scrollToSection(ref);
    } else {
      // On mobile, just toggle the expanded state without sorting
      if (expandedId === id) {
        // Collapse the expanded project
        setExpandedId(null);
      } else {
        // Expand the clicked project
        setExpandedId(id);
      }
    }
  };
  

  return (
    <div className="section" ref={ref}>
      <h1>03 {"\xa0"} Projects</h1>
      <div className="sectionContent">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`content2 ${
              expandedId === project.id ? "expanded" : ""
            }`}
          >
            <button
              onClick={() => toggleExpand(project.id)}
              className="project"
            >
              <img src={project.img} alt={project.alt} />
            </button>
            <h2 className="bigTitle">{project.title}</h2>
            <div className="textDiv">
              <h2 className="expTitle">{project.title}</h2>
              <div className="project-details">
                <p>{project.date}</p>
                <p>{project.description}</p>
                <p>Tools & skills: {project.skills}</p>
                <div className="linkDiv">
                  {project.links.map((link, i) => (
                    <p key={i} className="projectLinks">
                      ➔&nbsp;
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="detailImgs">
              {project.detailimg &&
                project.detailimg.map((img, index) => (
                  <img
                    className="detailImg"
                    key={index}
                    src={img}
                    alt={`${project.alt} ${index + 1}`}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProjectPage;

//nu fungerar allt som det ska:)
