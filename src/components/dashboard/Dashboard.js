import React, { Component } from "react";
import TeamList from "../teams/TeamList";
import CreateTeam from "../teams/CreateTeam";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // takes data & auth from props
    const { auth, teams, profile } = this.props;
    /*     if (!auth.uid) return <Redirect to="/getin" />;
     */
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12">
            <TeamList teams={teams} profile={profile} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <CreateTeam />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // take in data from state,firestore,ordered,data
    teams: state.firestore.ordered.teams,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  // connects collection to to firestore to be used as state on site
  firestoreConnect([
    // which collection to connect to?
    { collection: "teams", orderedBy: ["createdAt", "desc"] }
  ])
)(Dashboard);
