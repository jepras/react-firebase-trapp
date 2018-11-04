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
        members: [profile.mail]
      })
      .then(() => {
        dispatch({ type: 'CREATE_TEAM', team });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_TEAM_ERROR', err });
      });
  };
};

export const addMember = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // store database in firestore
    const firestore = getFirestore();

    // get collection
    firestore
      .collection('teams')
      .doc(item.team)
      .update({
        // use data from parameter team (where title is from createTeam component)
        members: firestore.FieldValue.arrayUnion(item.mail)
      })
      .then(() => {
        dispatch({ type: 'ADD_MEMBER', item });
      })
      .catch(err => {
        dispatch({ type: 'ADD_MEMBER_ERROR', err });
      });
  };
};

export const deleteMember = (id, member, team) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('teams')
      .doc(team.teamName)
      .update({
        members: firestore.FieldValue.arrayRemove(member)
      })
      .then(() => {
        dispatch({ type: 'DELETE_MEMBER', member });
      })
      .catch(err => {
        dispatch({ type: 'DELETE_MEMBER_ERROR', err });
      });
  };
};
