import React from 'react';
import moment from 'moment';

const TaskSummary = ({
  task: { title, authorFirstName, authorLastName },
  onDelete,
  index,
  task
}) => {
  return (
    <div className="card z-depth-0 data-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{title}</span>
        <p>
          {index} - Posted by {authorFirstName} {authorLastName}
        </p>
        <p className="grey-text">
          {moment(task.createdAt.toDate()).calendar()}
        </p>
        <button
          className="btn"
          type="button"
          onClick={() => onDelete(index, task)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TaskSummary;
