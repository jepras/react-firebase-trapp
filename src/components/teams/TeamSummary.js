import React from 'react';

const TeamSummary = ({ team }) => {
  return (
    <div className="card z-depth-0 data-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{team.teamName}</span>
      </div>
    </div>
  );
};

export default TeamSummary;
