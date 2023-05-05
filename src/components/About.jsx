import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div
      id="about"
      className="img-fluid"
      style={{
        color: "#0D4C92",
      }}
    >
      <img
        className="bannerImg"
        src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pgMqBD83WYMDURFITwm1Y57Nkxs2lzHY6aMDyCly-nU2Ozn53Q54lbHWMMFDIKuyCtgJudTTLqSQhItLDaLHagcrvnQQ=s1600"
        alt="My pic should've been here lol !"
      />
      <h3>Hey There! , welcome to my website</h3>
      <h4>You'll find some interesting info about me below ⬇️</h4>
    </div>
  );
};

export default About;
