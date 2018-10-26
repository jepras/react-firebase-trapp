const initState = {};

// eslint-disable-next-line
const teamReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TEAM':
      console.log('create team', action.team);
      return state;
    case 'CREATE_TEAM_ERROR':
      console.log('create team error,', action.err);
      return state;
    default:
      return state;
  }
};

export default teamReducer;
