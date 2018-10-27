import React, { Component } from 'react';
import DataList from '../data/DataList';
import TeamList from '../teams/TeamList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    // takes data & auth from props
    const { data, auth, teams } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    console.log(this.props);

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">{/* <DataList data={data} /> */}</div>
          <div className="col s12 m6">
            <TeamList teams={teams} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // take in data from state,firestore,ordered,data
    data: state.firestore.ordered.data,
    teams: state.firestore.ordered.teams,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  // connects collection to to firestore to be used as state on site
  firestoreConnect([
    // which collection to connect to?
    { collection: 'data', orderedBy: ['createdAt', 'desc'] },
    { collection: 'teams', orderedBy: ['createdAt', 'desc'] }
  ])
)(Dashboard);
