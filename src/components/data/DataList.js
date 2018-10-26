import React from 'react';
import DataSummary from './DataSummary';
import { Link } from 'react-router-dom';

const DataList = ({ data }) => {
  return (
    <div className="data-list section">
      {data &&
        data.map(item => {
          return (
            <Link to={'/data/' + item.id} key={item.id}>
              <DataSummary item={item} />
            </Link>
          );
        })}
    </div>
  );
};

export default DataList;
