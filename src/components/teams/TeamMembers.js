import React from 'react';
import { deleteMember } from '../../store/actions/teamActions';
import Member from './Member';
import { connect } from 'react-redux';

const TeamMembers = ({ teamMembers, onDelete, team }) => {
  console.log(team.teamName);
  return (
    <div className="teams-list section">
      {teamMembers &&
        teamMembers.map((member, index) => {
          return (
            <Member
              member={member}
              onDelete={onDelete}
              key={index}
              index={index}
              team={team}
            />
          );
        })}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id, member, team) => {
      dispatch(deleteMember(id, member, team));
      console.log(deleteMember(id, member, team));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TeamMembers);
