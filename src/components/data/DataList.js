import React from 'react';
import TaskSummary from '../tasks/TaskSummary';
import { deleteData } from '../../store/actions/dataActions';
import { connect } from 'react-redux';

const DataList = ({ tasks, onDelete }) => {
  console.log(tasks);
  return (
    <div className="data-list section">
      {tasks &&
        tasks.map((task, index) => {
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
