import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "../home/Header";
import Footer from "../home/Footer";

class GetIn extends Component {
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;

    return (
      <div>
        <Header />
        <div className="container row">
          <div className="col s6">
            <SignIn />
          </div>
          <div className="col s6">
            <SignUp />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(GetIn);
