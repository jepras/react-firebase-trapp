import React from "react";
import { NavLink } from "react-router-dom";

const SignedInHome = () => (
  <div>
    <a
      className="button button-primary button-shadow"
      href="https://jepperasmussen1.typeform.com/to/Kc3xNZ"
      target="_blank"
      rel="noopener noreferrer"
    >
      Make request
    </a>
    <p>
      See your <NavLink to="/dashboard">requests</NavLink>
    </p>
  </div>
);

export default SignedInHome;
