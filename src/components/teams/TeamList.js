import React from 'react';
import TeamSummary from './TeamSummary';
import { Link } from 'react-router-dom';

const TeamList = ({ teams }) => {
  return (
    <div className="teams-list section">
      {teams &&
        teams.map(team => {
          return (
            <Link to={'/teams/' + team.id} key={team.id}>
              <TeamSummary team={team} />
            </Link>
          );
        })}
    </div>
  );
};

export default TeamList;
