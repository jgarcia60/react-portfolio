import React from "react";
import '../Navbar/Navbar.css';

function Navbar(props) {

    const onMouseHover = (obj) => {

    }
//   render() {
    return (
      <>
        <div class="navbar-container centered">
          <div class="ml-2 navbar-item-container centered">
            <span class="font-weight-bold navbar-item centered">About Me</span>
            <div class="navbar-item-selected navbar-border navbar-item"></div>
          </div>
          <div class="ml-2 navbar-item-container centered">
            <span class="navbar-item centered">Projects</span>
            <div class="underline-from-left navbar-border navbar-item"></div>
          </div>
          <div class="ml-2 navbar-item-container centered">
            <span class="navbar-item centered">Resume</span>
            <div class="underline-from-left navbar-border navbar-item"></div>
          </div>
          <div class="ml-2 navbar-item-container centered">
            <span class="navbar-item centered">Contact Me</span>
            <div class="underline-from-left navbar-border navbar-item"></div>
          </div>
        </div>
      </>
    );
  }

export default Navbar;
