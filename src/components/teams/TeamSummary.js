import React from 'react';

const TeamSummary = ({ team, profile }) => {
  // only show teams where user is a member
  console.log(team.members);
  console.log(profile.mail);
  if (team.members.includes(profile.mail)) {
    return (
      <div className="card z-depth-0 data-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{team.teamName}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default TeamSummary;
