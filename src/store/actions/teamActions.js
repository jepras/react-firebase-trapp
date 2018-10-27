export const createTeam = team => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // store database in firestore
    const firestore = getFirestore();
    // getState gives us state object where we can fetch
    const profile = getState().firebase.profile;
    // get id attached to user profile -- IMPORTANT
    const teamOwnerId = getState().firebase.auth.uid;

    // get collection
    firestore
      .collection('teams')
      .doc(team.teamName)
      .set({
        // use data from parameter team (where title is from createTeam component)
        ...team,
        teamOwnerFirstName: profile.firstName,
        teamOwnerLastName: profile.lastName,
        teamOwnerID: teamOwnerId,
        createdAt: new Date(),
        tasks: []
      })
      .then(() => {
        dispatch({ type: 'CREATE_TEAM', team });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_TEAM_ERROR', err });
      });
  };
};
