export const deleteData = (id, task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('teams')
      .doc('LFC')

      .update({
        tasks: firestore.FieldValue.arrayRemove(task)
      })
      .then(() => {
        dispatch({ type: 'DELETE_DATA', task });
      })
      .catch(err => {
        dispatch({ type: 'DELETE_DATA_ERROR', err });
      });
  };
};

export const createData = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // store database in firestore
    const firestore = getFirestore();
    // getState gives us state object where we can fetch
    const profile = getState().firebase.profile;
    // get id attached to user profile -- IMPORTANT
    const authorId = getState().firebase.auth.uid;

    // get collection
    firestore
      .collection('teams')
      .doc(item.team)
      .update({
        // use data from parameter item (where title is from createData component)
        tasks: firestore.FieldValue.arrayUnion({
          ...item,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorID: authorId,
          createdAt: new Date()
        })
      })
      .then(() => {
        dispatch({ type: 'CREATE_DATA', item });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_DATA_ERROR', err });
      });
  };
};
