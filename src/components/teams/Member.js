import React from 'react';

const Member = ({ member, onDelete, index, team }) => {
  return (
    <div className="card row data-summary valign-wrapper no-margin">
      <div className="col s11 z-depth-1">
        <p>{member}</p>
      </div>
      <div className="col s1">
        <a
          className="btn-small button-padding waves-effect"
          onClick={() => onDelete(index, member, team)}
        >
          <i class="material-icons">delete</i>
        </a>
      </div>
    </div>
  );
};

export default Member;
