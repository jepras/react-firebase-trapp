import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const DataDetails = props => {
  const { item, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (item) {
    return (
      <div className="container section item-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {item.authorFirstName} {item.authorLastName}
            </div>
            <div>{moment(item.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container cente">
        <p>loading items</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const data = state.firestore.data.data;
  // check if we have any items in data, if so, look for the one with the id in const above.
  const item = data ? data[id] : null;
  return {
    // return it in object item. Now available in props.item
    item: item,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  // give page access to database state
  firestoreConnect([{ collection: 'data' }])
)(DataDetails);
