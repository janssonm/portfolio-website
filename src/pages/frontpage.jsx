import React from "react";
import "../styles/frontpage.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const FrontPage = React.forwardRef((props, ref) => {
  return (
    <div className="frontPage" ref={ref}>
      <div className="greeting">
        <p id="helloText">Hello, I'm Matilda</p>
        <h1 id="studentText">Interactive Media Technology @ KTH</h1>
      </div>
    </div>
  );
});
export default FrontPage;
