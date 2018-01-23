const defaultState = {
  entries: [],
  selectedEntry: {
    entry_id: '',
    user: '',
    date: 0,
    weight: 0
  }
};

const entriesReducer = ( state = defaultState, action ) => {
  switch( action.type ){
    case 'ADD_ENTRY':
      return {
        ...state,
        entries: state.entries.concat( action.entry )
      };

    case 'DELETE_ENTRY':
      return {
        ...state,
        entries: state.entries.filter( entry => entry.entry_id !== action.id )
      };

    case 'GET_ENTRY':
      return {
        ...state,
        selectedEntry: state.entries.filter( entry => entry.entry_id === action.id )[0]
      };

    default:
      return state;
  }
}

export default entriesReducer;
