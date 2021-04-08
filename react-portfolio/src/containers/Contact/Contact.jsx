import React from "react";

function Contact(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Contact;
