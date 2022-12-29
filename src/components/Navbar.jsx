import React from "react";
//import { ReactDOM } from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-light navbar-expand-lg  mb-3"
        style={{ backgroundColor: '#CFF5E7' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Prateek Jha</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: 'black' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='#about'>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#experience'>
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#education'>
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#projects'>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#contact'>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar