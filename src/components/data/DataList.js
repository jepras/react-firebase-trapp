import React from 'react';
import TaskSummary from '../tasks/TaskSummary';
import { deleteData } from '../../store/actions/dataActions';
import { connect } from 'react-redux';

const DataList = ({ data, onDelete }) => {
  var teamdata = data.tasks;

  return (
    <div className="data-list section">
      {teamdata &&
        teamdata.map((task, index) => {
          return (
            <TaskSummary
              task={task}
              onDelete={onDelete}
              key={index}
              index={index}
            />
          );
        })}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id, task) => {
      dispatch(deleteData(id, task));
      console.log(deleteData(id, task));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DataList);
