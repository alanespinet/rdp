const defaultState = {
  entries: [{
    entry_id: '01',
    user: 'Yumisisleydis',
    date: "2016-09-30",
    weight: 200,
    comments: 'Muy gorda'
  }, {
    entry_id: '02',
    user: 'Yumisisleydis',
    date: "2017-10-15",
    weight: 300,
    comments: 'Mucho mas gorda'
  }, {
    entry_id: '03',
    user: 'Yumisisleydis',
    date: "2017-11-21",
    weight: 400,
    comments: 'Eres una Vaca'
  }],

  selectedEntry: {
    entry_id: '',
    user: '',
    date: "2018-01-01",
    weight: 0,
    comments: ''
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
