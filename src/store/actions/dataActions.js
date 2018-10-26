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
      .collection('tasks')
      .add({
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
