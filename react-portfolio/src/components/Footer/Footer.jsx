import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-1">
            <a
              href="https://www.linkedin.com/in/jonathan-garcia-91203364/"
              target="__blank"
            >
              <FontAwesomeIcon icon={faLinkedin} class="footer-icon" />
            </a>
          </div>
          <div className="col-md-1">
            <a href="https://github.com/jgarcia60/" target="__blank">
              <FontAwesomeIcon icon={faGithub} class="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright justify-content-md-center">
        <div className="container">Copyright © Jonathan Garcia 2021 </div>
      </div>
    </footer>
  );
};

export default Footer;