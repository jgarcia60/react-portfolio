import React from "react";
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {

    const redirect = (page) => {
        window.location.href = page;
    }
    return (
      <>
        <div className="navbar-container centered">
          <div className="ml-2 navbar-item-container centered">
            <span className="font-weight-bold navbar-item centered" onClick={() => redirect('/about')}>About Me</span>
            <div className="navbar-item-selected navbar-border navbar-item"></div>
          </div>
          <div className="ml-2 navbar-item-container centered">
            <span className="navbar-item centered" onClick={() => redirect('/projects')}>Projects</span>
            <div className="underline-from-left navbar-border navbar-item"></div>
          </div>
          <div className="ml-2 navbar-item-container centered">
            <span className="navbar-item centered" onClick={() => redirect('/resume')}>Resume</span>
            <div className="underline-from-left navbar-border navbar-item"></div>
          </div>
          <div className="ml-2 navbar-item-container centered">
            <span className="navbar-item centered" onClick={() => redirect('/contact')}>Contact Me</span>
            <div className="underline-from-left navbar-border navbar-item"></div>
          </div>
        </div>
      </>
    );
  }

export default Navbar;
