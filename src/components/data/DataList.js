import React from 'react';
import TaskSummary from '../tasks/TaskSummary';
import { deleteData } from '../../store/actions/dataActions';
import { connect } from 'react-redux';
import moment from 'moment';

const DataList = ({ tasks, onDelete, team, week }) => {
  console.log(week);
  return (
    <div className="data-list">
      {tasks &&
        tasks.map((task, index) => {
          if (
            task.team === team.teamName &&
            moment(task.createdAt.toDate()).format('w') === week
          ) {
            return (
              <TaskSummary
                task={task}
                onDelete={onDelete}
                key={index}
                index={index}
              />
            );
          }
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
