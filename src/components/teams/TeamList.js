import React from 'react';
import TeamSummary from './TeamSummary';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TeamList = ({ teams, profile }) => {
  const thisWeek = moment().format('w');
  return (
    <div className="teams-list section">
      {teams &&
        teams.map(team => {
          return (
            <Link to={'/teams/' + team.id + '/' + thisWeek} key={team.id}>
              <TeamSummary team={team} profile={profile} />
            </Link>
          );
        })}
    </div>
  );
};

export default TeamList;
