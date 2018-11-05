import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

const TeamNav = props => {
  const { auth, profile, team } = props;

  const thisWeek = moment().format('w');
  const lastWeek = thisWeek - 1;
  const nextWeek = lastWeek + 2;

  return (
    <nav className="card z-depth-5">
      <div className="nav-wrapper grey darken-3 center-align">
        <span className="card-title">{team.teamName}</span>
      </div>

      <div className="nav-content grey darken-3 center-align">
        <ul className="tabs tabs-transparent center">
          <li className="tab">
            <Link to={'/teams/' + team.teamName + '/' + lastWeek} key={team.id}>
              Last Week ({lastWeek})
            </Link>
          </li>
          <li className="tab">
            <Link to={'/teams/' + team.teamName + '/' + thisWeek} key={team.id}>
              This Week ({thisWeek})
            </Link>
          </li>
          <li className="tab">
            <Link to={'/teams/' + team.teamName + '/' + nextWeek} key={team.id}>
              Next Week ({nextWeek})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(TeamNav);
