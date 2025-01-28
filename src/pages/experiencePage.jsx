import React from "react";

const ExperiencePage = React.forwardRef((props, ref) => {
  return (
    <div id="expPage" className="scrollItem itemPage" ref={ref}>
      <h1>02 {"\xa0"} Experience & voluntary work</h1>
      <div className="items">
        <div className="item">
          <h2>Skry</h2>
          <h3>Internship, fullstack</h3>
          <h4>Jan. 2024 - May 2024</h4>
          <h4>
            Internship as part of the course DM1998 at KTH during spring 2024. I
            developed web applications using mainly JavaScript with Vue.js as
            framework for the front-end and Ruby using Ruby on Rails as
            framework for the back-end. <br />
          </h4>
          <h4>
            ➔
            <a href="https://skry.se" target="_blank" rel="noopener noreferrer">
              Skry's website
            </a>
          </h4>
        </div>
        <div className="item">
          <h2>Quarnevalen, KTH</h2>
          <h3>Graphic designer</h3>
          <h4>Feb. 2023- May 2023</h4>
        </div>
        <div className="item">
          <h2>The Board of Communication, Media Technology, KTH</h2>
          <h3>Social media manager</h3>
          <h4>Sep. 2022- June 2023</h4>
        </div>
      </div>
    </div>
  );
});
export default ExperiencePage;
