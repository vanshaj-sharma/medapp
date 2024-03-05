import React from "react";
import CommonRight from "./CommonRight";

import photo1 from "./assets/4.png";
import photo2 from "./assets/1.png";
import photo3 from "./assets/3.png";
import photo4 from "./assets/9.png";
import affpic1 from "./assets/5.png";
import affpic2 from "./assets/6.png";
import affpic3 from "./assets/7.png";

import CommonLeft from "./CommonLeft";
import CommonLast from "./CommonLast";

const Affiliations = () => {
  return (
    <div>
      <div className="affliationsDiv">
        <h1 style={{ color: "#043caa" }}>Affiliations</h1>
        <div>
          <img src={affpic1} id="affStyle" className="img-fluid" alt="photo" />
          <img src={affpic2} id="affStyle" className="img-fluid" alt="photo" />
          <img src={affpic3} id="affStyle" className="img-fluid" alt="photo" />
        </div>
      </div>
      <div style={{ paddingTop: "50px", textAlign: "center" }}>
        <h1 style={{ color: "#043caa" }}>Key Benefits</h1>
      </div>
      <CommonRight
        header="All your medicines in one place"
        line1="Search and find all kinds of drugs"
        line2="We have drugs for social case treatments"
        line3="Get notified when your drug is available"
        pic={photo1}
      />

      <CommonLeft
        header="Set up your profile easily"
        line1="When you are a member refil is easier"
        line2="With one click your medicine is on it's way"
        line3="Select a health care specialist"
        pic={photo2}
      />

      <CommonRight
        header="All your medicines in one place"
        line1="Search and find all kinds of drugs"
        line2="We have drugs for social case treatments"
        line3="Get notified when your drug is available"
        pic={photo3}
      />

      <CommonLast pic={photo4} />
    </div>
  );
};

export default Affiliations;
