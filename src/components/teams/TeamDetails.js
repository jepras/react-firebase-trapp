import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import CreateData from '../data/CreateData';
import TeamMembers from './TeamMembers';
import AddMember from './AddMember';
import DataList from '../data/DataList';

const TeamDetails = props => {
  const { team, auth, tasks, profile } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (team) {
    const teamMembers = team.members;

    return (
      <div className="container section white team-details">
        <nav className="card z-depth-5">
          <div className="nav-wrapper grey darken-3 center-align">
            <span className="card-title">{team.teamName}</span>
          </div>
          <div className="nav-content grey darken-3 center-align">
            <ul className="tabs tabs-transparent center">
              <li className="tab">
                <a href="#test1">Last Week</a>
              </li>
              <li className="tab">
                <a className="active" href="#test2">
                  This Week
                </a>
              </li>
              <li className="tab">
                <a href="#test4">Next Week</a>
              </li>
            </ul>
          </div>
        </nav>
        <br />

        <div className="card section">
          <span className="card-title space">Tasks</span>

          <DataList tasks={tasks} team={team} />
          <CreateData team={team} />
        </div>
        <div className="card section">
          <h5 className="grey-text text-darken-3 space">People</h5>
          <TeamMembers teamMembers={teamMembers} team={team} />

          {/* Only show if owner (not complete) */}
          {profile.firstName === team.teamOwnerFirstName && (
            <AddMember team={team} />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>loading teams</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  const teams = state.firestore.data.teams;
  const tasks = state.firestore.ordered.tasks;
  // check if we have any teams in data, if so, look for the one with the id in const above.
  const team = teams ? teams[id] : null;
  return {
    // return it in object team. Now available in props.team
    team: team,
    auth: state.firebase.auth,
    tasks: tasks,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  // give page access to database state
  firestoreConnect([
    // which collection to connect to?
    { collection: 'teams', orderedBy: ['createdAt', 'desc'] },
    { collection: 'tasks' }
  ])
)(TeamDetails);
