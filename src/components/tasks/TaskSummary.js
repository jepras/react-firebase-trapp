import React from 'react';
import moment from 'moment';

const TaskSummary = ({ onDelete, index, task }) => {
  return (
    <div className="card row data-summary valign-wrapper no-margin">
      <div className="col s7 z-depth-1">
        <p>
          {task.title}: {task.content}
        </p>
      </div>
      <div className="col s4">
        <p className="grey-text">
          {task.authorFirstName} -{moment(task.createdAt.toDate()).calendar()}
        </p>
      </div>
      <div className="col s1">
        <a
          className="btn-small button-padding waves-effect"
          onClick={() => onDelete(index, task)}
        >
          <i class="material-icons">delete</i>
        </a>
      </div>
    </div>
  );
};

export default TaskSummary;
