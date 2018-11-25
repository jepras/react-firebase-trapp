import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutHome = () => (
  <div>
    <p />
    <div className="columns">
      <div className="column">
        <NavLink className="button button-primary button-shadow" to="/signin">
          Sign in
        </NavLink>
      </div>
      <div className="column">
        <NavLink to="/signup" className="button button-primary button-shadow">
          Register
        </NavLink>
      </div>
    </div>
    <hr />
    <p>
      Login to make a request or see current{" "}
      <NavLink to="/dashboard">open requests</NavLink>
    </p>
  </div>
);

export default SignedOutHome;
