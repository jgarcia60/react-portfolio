import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row center-align">
          <div className="col s1 offset-s5">
            <a
              href="https://www.linkedin.com/in/jonathan-garcia-91203364/"
              target="__blank"
            >
              <FontAwesomeIcon icon={faLinkedin} class="footer-icon" />
            </a>
          </div>
          <div className="col s1 ">
            <a href="https://github.com/jgarcia60/" target="__blank">
              <FontAwesomeIcon icon={faGithub} class="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright center-align">
        <div className="container">Copyright © Jonathan Garcia 2021 </div>
      </div>
    </footer>
  );
};

export default Footer;