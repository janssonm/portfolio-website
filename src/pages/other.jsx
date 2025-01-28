import React from "react";

const OtherPage = React.forwardRef((props, ref) => {
  return (
    <div id="otherPage" className="scrollItem itemPage" ref={ref}>
      <h1>04 {"\xa0"} Other</h1>
      <div className="items">
        <div className="item">
          <h2>Scholarship</h2>
          <h3>June 2020</h3>
          <h4>Ljungbergsfonden</h4>
        </div>
        <div className="item">
          <h2>Scholarship</h2>
          <h3>June 2020</h3>
          <h4>
            Scholarship for entrepreneurial skills running the young enterprise
            company Noted UF
          </h4>
        </div>
        <div className="item">
          <h2>Scholarship</h2>
          <h3>June 2019</h3>
          <h4>Gymnasieskolans samfond</h4>
        </div>
      </div>
    </div>
  );
});
export default OtherPage;
