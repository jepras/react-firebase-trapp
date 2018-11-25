import React, { Component } from "react";
import { connect } from "react-redux";

/* import SignedInHome from "./SignedInHome";
import SignedOutHome from "./SignedOutHome"; */
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

class Home extends Component {
  render() {
    // takes data & auth from props
    /*     const { auth } = this.props;
     */ /*     const reqOrSign = auth.uid ? <SignedInHome /> : <SignedOutHome />;
     */
    return (
      <div className="is-boxed has-animations">
        <div className="body-wrap boxed-container">
          <Header />
          <main>
            <Hero />
            <Features />
            <Testimonials />
          </main>
          <Footer />
        </div>
        {/* <script src="../../style/js/main.min.js" /> */}
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

export default connect(
  mapStateToProps,
  null
)(Home);
