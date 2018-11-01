import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import CreateData from '../data/CreateData';
import DataList from '../data/DataList';

const TeamDetails = props => {
  const { team, auth, data, tasks } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  console.log(props);

  if (team) {
    return (
      <div className="container section team-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{team.teamName}</span>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Created by {team.teamOwnerFirstName} {team.teamOwnerLastName}
            </div>
          </div>
        </div>

        <CreateData team={team} />
        <DataList tasks={tasks} />
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
    { collection: 'tasks', orderedBy: ['createdAt', 'desc'] }
  ])
)(TeamDetails);
