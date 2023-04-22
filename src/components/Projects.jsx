import React from "react";
import "./styles/Projects.css";

import newsFirstImg from "../assets/newsFirstLandingPage.png";
import simonImg from "../assets/simonLandingPage.png";
import fakeflixImg from "../assets/fakeflixLandingPage.png";
import shreadNationImg from "../assets/shreadNationLandingPage.png";
import myEcomImg from "../assets/myEcomLandingPage.png";

const projects = [
  {
    id: 1,
    projectName: "NewsFirst",
    projectIcon: newsFirstImg,
    projectDescription: "A news website that displays real time top headlines",
    projectGithubRepo: "https://github.com/prtkjha01/newsapp",
    projectUrl: "https://www.youtube.com/watch?v=VLtuqkbu1RU",
  },
  {
    id: 2,
    projectName: "My E-com",
    projectIcon: myEcomImg,
    projectDescription:
      "A Fullstack e-commerce website with own database and auth, cart, order features",
    projectGithubRepo: "https://github.com/prtkjha01/my-ecom",
    projectUrl: "",
  },
  {
    id: 3,
    projectName: "Movies App",
    projectIcon: fakeflixImg,
    projectDescription:
      "A movie website that displays real time top trending movies",
    projectGithubRepo: "https://github.com/prtkjha01/movie-app",
    projectUrl: "https://fake-flix.netlify.app",
  },
  {
    id: 4,
    projectName: "Shread Nation",
    projectIcon: shreadNationImg,
    projectDescription: "A Gym website frontend",
    projectGithubRepo: "https://github.com/prtkjha01/Gym-Website",
    projectUrl: "https://prtkjha01.github.io/Gym-Website/",
  },
  {
    id: 5,
    projectName: "Simon Game",
    projectIcon: simonImg,
    projectDescription: "A vanilla javascript game",
    projectGithubRepo: "https://github.com/prtkjha01/Simon-Game",
    projectUrl: "https://prtkjha01.github.io/Simon-Game/",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2 className="mt-4" style={{ color: "#3e8784 " }}>
        Projects
      </h2>
      <div className="container p-5">
        <div className="row">
          {projects.map((project) => {
            return (
              <div className="col-lg-4 col-sm-12 col-12" key={project.id}>
                <div
                  className="card project-card mb-3"
                  style={{
                    borderRadius: "5%",
                    backgroundColor: "#86C8BC",
                  }}
                >
                  <div className="d-flex justify-content-center">
                    <img
                      height="200px"
                      style={{
                        borderRadius: "5% 5% 0 0",
                      }}
                      src={project.projectIcon}
                      className="card-img-top img"
                      alt="This should've been project icon"
                    />
                  </div>

                  <div className="card-body card-text">
                    <h5 className="card-title" style={{ color: "#fff" }}>
                      {project.projectName}
                    </h5>
                    <p className="card-text text-start">
                      {project.projectDescription}
                    </p>
                    <div className="row">
                      <a
                        className="col-lg-6 col-6 nav-link py-0"
                        href={project.projectGithubRepo}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <p className="card-text">
                          <small className="">View Code &lt;/&gt;</small>
                        </p>
                      </a>
                      <a
                        className={`col-lg-6 col-6 nav-link py-0 ${
                          project.projectUrl.length !== 0 ? "" : "disabled"
                        }`}
                        href={project.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <p className="card-text">
                          <small className="">
                            {project.projectUrl.length !== 0
                              ? "Go to Project ➡️"
                              : "Under Development 🧑🏻‍💻"}
                          </small>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
