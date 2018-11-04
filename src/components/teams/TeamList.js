import React from 'react';
import TeamSummary from './TeamSummary';
import { Link } from 'react-router-dom';

const TeamList = ({ teams, profile }) => {
  return (
    <div className="teams-list section">
      {teams &&
        teams.map(team => {
          console.log(team);
          return (
            <Link to={'/teams/' + team.id} key={team.id}>
              <TeamSummary team={team} profile={profile} />
            </Link>
          );
        })}
    </div>
  );
};

export default TeamList;
