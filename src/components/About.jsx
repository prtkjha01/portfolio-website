import React from "react";
import "./styles/About.css";
import profile from "../assets/profile.png";
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
        src={profile}
        alt="My pic should've been here lol !"
      />
      <h3>Hey There! , welcome to my website</h3>
      <h4>You'll find some interesting info about me below ⬇️</h4>
    </div>
  );
};

export default About;
