import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/Footer.css";
const contacts = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={"fa-brands fa-github"} />,
    name: "Github",
    link: "https://github.com/prtkjha01",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={"fa-solid fa-envelope"} />,
    name: "Gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=prtkjha01@gmail.com",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={"fa-brands fa-linkedin"} />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prateekjha01/",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={"fa-solid fa-code"} />,
    name: "Leetcode",
    link: "https://leetcode.com/Prateek01/",
  },
];
const Footer = () => {
  return (
    <footer
      id="contact"
      className="footer p-4"
      style={{
        backgroundColor: "#0D4C92",
        color: "#fff",
        position: "relative",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="contact-text container" style={{ padding: "0 " }}>
        <p>Contact Me</p>
        <br />
        <div className="row icon-row">
          {contacts.map((contact) => {
            return (
              <div
                key={contact.id}
                className="contact-items col-lg-3 col-md-3 col-3"
              >
                <div>
                  {/* <FontAwesomeIcon icon={contact.icon} /> */}
                  {contact.icon}
                </div>
                <p className="Contact-item mx-2">
                  <a
                    className="contactItem-text"
                    href={contact.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {contact.name}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
