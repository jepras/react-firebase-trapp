import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import CreateData from '../data/CreateData';
import TeamMembers from './TeamMembers';
import AddMember from './AddMember';
import DataList from '../data/DataList';
import { NavLink } from 'react-router-dom';

const TeamDetails = props => {
  const { team, auth, tasks } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  console.log(props);

  if (team) {
    return (
      <div className="container section white team-details">
        <nav className="card z-depth-5">
          <div className="nav-wrapper grey darken-3 center-align">
            <span className="card-title">{team.teamName}</span>
          </div>
          <div class="nav-content grey darken-3 center-align">
            <ul class="tabs tabs-transparent center">
              <li class="tab">
                <a href="#test1">Last Week</a>
              </li>
              <li class="tab">
                <a class="active" href="#test2">
                  This Week
                </a>
              </li>
              <li class="tab">
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
          <h5 className="grey-text text-darken-3 space">Add Member</h5>
          {/* <TeamMembers team={team} /> */}
          <AddMember team={team} />
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
    tasks: tasks
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
