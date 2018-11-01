export const deleteData = (id, task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('tasks')
      .doc(task.title)
      .delete()
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

    // redux state
    // getState gives us state object where we can fetch
    const profile = getState().firebase.profile;
    // get id attached to user profile -- IMPORTANT
    const authorId = getState().firebase.auth.uid;

    // get collection
    firestore
      .collection('tasks')
      .doc(item.title)
      .set({
        // use data from parameter item (where title is from createData component)
        ...item,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_DATA', item });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_DATA_ERROR', err });
      });
  };
};
