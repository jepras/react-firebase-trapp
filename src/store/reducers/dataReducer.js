const initState = {};

// eslint-disable-next-line
const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_DATA':
      console.log('create data', action.data);
      return state;
    case 'CREATE_DATA_ERROR':
      console.log('create data error,', action.err);
      return state;
    default:
      return state;
  }
};

export default dataReducer;
